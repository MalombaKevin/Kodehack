import { Router } from "express";

import { addAnswer, deleteAnswer, getAllAnswers, getOneAnswer, updateAnswer } from "../Controllers/answersControllers";
import { verifyToken } from "../Middleware/verifyToken";


const answersRouter = Router() 

answersRouter.get('', verifyToken, getAllAnswers) 
answersRouter.get('/:id',verifyToken,  getOneAnswer) 
answersRouter.post('',verifyToken,  addAnswer) 
answersRouter.put('/:id',verifyToken,  updateAnswer) 
answersRouter.delete('/:id',verifyToken,  deleteAnswer) 


export default answersRouter