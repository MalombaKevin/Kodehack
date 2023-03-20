import { Router } from "express";
import { LoginUser, RegisterUser } from "../Controllers/authController";
import { getAllUsers } from "../Controllers/userControllers";

const registerRouter = Router() 

registerRouter.post('/register', RegisterUser) 
registerRouter.post('/login', LoginUser) 


export default registerRouter