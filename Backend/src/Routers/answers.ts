import { Router } from "express";

import { addAnswer, deleteAnswer, getAllAnswers, getOneAnswer, updateAnswer } from "../Controllers/answersControllers";


const answersRouter = Router() 

answersRouter.get('', getAllAnswers) 
answersRouter.get('/:id', getOneAnswer) 
answersRouter.post('', addAnswer) 
answersRouter.put('/:id', updateAnswer) 
answersRouter.delete('/:id', deleteAnswer) 


export default answersRouter