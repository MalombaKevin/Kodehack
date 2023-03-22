import { Router } from "express";

import { addComment, deleteComment, getAllComments, getOneComment, updateComment } from "../Controllers/commentsController";
import { verifyToken } from "../Middleware/verifyToken";


const commentsRouter = Router() 

commentsRouter.get('', verifyToken, getAllComments) 
commentsRouter.get('/:id',verifyToken,  getOneComment) 
commentsRouter.post('', verifyToken, addComment) 
commentsRouter.put('/:id',verifyToken,  updateComment) 
commentsRouter.delete('/:id',verifyToken,  deleteComment) 



export default commentsRouter