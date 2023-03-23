import { Router } from "express";
import { addQuestion,deleteQuestion,getAllQuestions, getOneQuestion, updateQuestion} from "../Controllers/questionControllers";
import { verifyToken } from "../Middleware/verifyToken";

 const questionsRouter = Router() 
 questionsRouter.get('',verifyToken, getAllQuestions) 
 questionsRouter.post('', verifyToken, addQuestion) 
 questionsRouter.get('/:id',verifyToken,  getOneQuestion) 
 questionsRouter.put('/:id',verifyToken,  updateQuestion) 
 questionsRouter.delete('/:id',verifyToken,  deleteQuestion) 






 export default questionsRouter
