import { GithubApi } from '../lib/axios';

export async function fetchGithubUserImageUrl(username: string) {
  try {
    
    const response = await GithubApi.get(`/${username}`);
    const { avatar_url } = response.data;
    
    return avatar_url;
  } catch(error) {
    console.log(error);
    throw new Error('Error fetching github user information!');
  }
}