
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { SaveUserRequestBody } from "../dto/saveUserRequest.dto";
import { fetchGithubUserImageUrl } from "../helpers/fetchGithubUserImageUrl";
import slugify from 'slugify'

const DEFAULT_SITE_URL = 'http://localhost:5173';
const prisma = new PrismaClient();
export default class UserController {
  static async getSingleUserInfo(request: Request, response: Response) {
    const { slug } = request.params;
    const user = await prisma.user.findFirst({
      where: {
        slug
      }
    })
    return response.json(user)
  }
   static async getUserInfo(request: Request, response: Response) {
    const allUsers = await prisma.user.findMany();
    return response.json(allUsers);
  }

  static async saveUserInfo(request: Request, response: Response) {
    const { 
      githubUrl,
      name,
      linkedinUrl,
      history
    } = request.body as SaveUserRequestBody;

    const DEFAULT_URL_PREFIX = 'https://';

    if(!githubUrl.includes(DEFAULT_URL_PREFIX) || !linkedinUrl.includes(DEFAULT_URL_PREFIX)) {
      return response.status(401).json({
        message: 'Incorrect url format!'
      })
    }

    try {
      const username = githubUrl.replace('https://github.com/', "").trim();
      
      const imageURL = await fetchGithubUserImageUrl(username);
      const slug = slugify(name, {
        lower: true,
        replacement: '-'
      });
      
      await prisma.user.create({      
        data: {
          githubUrl,
          name,
          linkedinUrl,
          history,
          slug,
          imageUrl: imageURL
        }
      })

      return response.json({
        url: `${DEFAULT_SITE_URL}/${slug}`,
        imageUrl: imageURL
      });
    } catch(err) {
      console.log(err);
      return response.status(404).json(err)
    }


   
  }
}