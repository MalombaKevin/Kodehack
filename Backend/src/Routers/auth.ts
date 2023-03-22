import { Router } from "express";
import { HomePage, LoginUser, RegisterUser } from "../Controllers/authController";
import { getAllUsers } from "../Controllers/userControllers";
import { verifyToken } from "../Middleware/verifyToken";

const registerRouter = Router() 

registerRouter.post('/register',  RegisterUser) 
registerRouter.post('/login',  LoginUser) 
registerRouter.get('/home',verifyToken ,HomePage)  //protected route


export default registerRouter