"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const answersControllers_1 = require("../Controllers/answersControllers");
const answersRouter = (0, express_1.Router)();
answersRouter.get('', answersControllers_1.getAllAnswers);
exports.default = answersRouter;
