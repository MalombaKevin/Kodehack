import { Router } from "express";
import { getAllUsers } from "../Controllers/userControllers";

const usersRouter = Router() 

usersRouter.get('', getAllUsers) 


export default usersRouter