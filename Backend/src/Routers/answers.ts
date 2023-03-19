import { Router } from "express";

import { addAnswer, deleteAnswer, getAllAnswers, getOneAnswer } from "../Controllers/answersControllers";


const answersRouter = Router() 

answersRouter.get('', getAllAnswers) 
answersRouter.get('/:id', getOneAnswer) 
answersRouter.post('', addAnswer) 
answersRouter.put('/:id') 
answersRouter.delete('/:id', deleteAnswer) 


export default answersRouter