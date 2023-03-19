import { Router } from "express";

import { deleteComment, getAllComments } from "../Controllers/commentsController";


const commentsRouter = Router() 

commentsRouter.get('', getAllComments) 
commentsRouter.delete('/:id', deleteComment) 


export default commentsRouter