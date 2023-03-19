 import { Router } from "express";
import { addQuestion,deleteQuestion,getAllQuestions, getOneQuestion, updateQuestion} from "../Controllers/kodehackController";

 const router = Router() 

 router.get('', getAllQuestions) 
 router.post('', addQuestion) 
 router.get('/:id', getOneQuestion) 
 router.put('/:id', updateQuestion) 
 router.delete('/:id', deleteQuestion) 



 export default router 
