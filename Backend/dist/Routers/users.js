"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControllers_1 = require("../Controllers/userControllers");
const usersRouter = (0, express_1.Router)();
usersRouter.get('', userControllers_1.getAllUsers);
exports.default = usersRouter;
