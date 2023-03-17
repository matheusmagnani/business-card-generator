import { Router } from "express";
import UserController from '../controllers/user-controller';



const routes = Router();


routes.get('/user', UserController.getUserInfo);
routes.get('/user/:slug', UserController.getSingleUserInfo);
routes.post('/user', UserController.saveUserInfo);

export default routes;