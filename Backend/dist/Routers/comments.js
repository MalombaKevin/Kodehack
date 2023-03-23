"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commentsController_1 = require("../Controllers/commentsController");
const verifyToken_1 = require("../Middleware/verifyToken");
const commentsRouter = (0, express_1.Router)();
commentsRouter.get('', verifyToken_1.verifyToken, commentsController_1.getAllComments);
commentsRouter.get('/:id', verifyToken_1.verifyToken, commentsController_1.getOneComment);
commentsRouter.post('', verifyToken_1.verifyToken, commentsController_1.addComment);
commentsRouter.put('/:id', verifyToken_1.verifyToken, commentsController_1.updateComment);
commentsRouter.delete('/:id', verifyToken_1.verifyToken, commentsController_1.deleteComment);
exports.default = commentsRouter;
