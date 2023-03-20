import { Router } from "express";

import { addComment, deleteComment, getAllComments, getOneComment, updateComment } from "../Controllers/commentsController";


const commentsRouter = Router() 

commentsRouter.get('', getAllComments) 
commentsRouter.get('/:id', getOneComment) 
commentsRouter.post('', addComment) 
commentsRouter.put('/:id', updateComment) 
commentsRouter.delete('/:id', deleteComment) 



export default commentsRouter