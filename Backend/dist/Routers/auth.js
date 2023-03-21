"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../Controllers/authController");
const verifyToken_1 = require("../Middleware/verifyToken");
const registerRouter = (0, express_1.Router)();
registerRouter.post('/register', authController_1.RegisterUser);
registerRouter.post('/login', authController_1.LoginUser);
registerRouter.get('/home', verifyToken_1.verifyToken, authController_1.HomePage); //protected route
exports.default = registerRouter;
