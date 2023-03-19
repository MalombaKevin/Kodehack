"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commentsController_1 = require("../Controllers/commentsController");
const commentsRouter = (0, express_1.Router)();
commentsRouter.get('', commentsController_1.getAllComments);
commentsRouter.delete('/:id', commentsController_1.deleteComment);
exports.default = commentsRouter;
