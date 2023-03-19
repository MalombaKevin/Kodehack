import { Router } from "express";
import { addQuestion,deleteQuestion,getAllQuestions, getOneQuestion, updateQuestion} from "../Controllers/questionControllers";

 const questionsRouter = Router() 
 questionsRouter.get('', getAllQuestions) 
 questionsRouter.post('', addQuestion) 
 questionsRouter.get('/:id', getOneQuestion) 
 questionsRouter.put('/:id', updateQuestion) 
 questionsRouter.delete('/:id', deleteQuestion) 






 export default questionsRouter
