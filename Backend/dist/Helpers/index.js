"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.authSchema = exports.questionSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.questionSchema = joi_1.default.object({
    title: joi_1.default.string().required().messages({
        'string.empty': 'Title cannot be empty'
    }),
    category: joi_1.default.string().required().messages({
        'string.empty': 'Category cannot be empty'
    }),
    question: joi_1.default.string().required().messages({
        'string.empty': 'Question cannot be empty'
    }),
    // userId:Joi.string().required().messages({
    //     'string.empty':'User Id cannot be empty'
    // }),
});
exports.authSchema = joi_1.default.object({
    username: joi_1.default.string().required().messages({
        'string.empty': 'username cannot be empty'
    }),
    email: joi_1.default.string().email().required().messages({
        'string.empty': 'Email cannot be empty',
        'string.email': 'Enter a valid email'
    }),
    password: joi_1.default.string().required().messages({
        'string.empty': 'Password cannot be empty',
    })
});
exports.loginSchema = joi_1.default.object({
    email: joi_1.default.string().email().required().messages({
        'string.empty': 'Email cannot be empty',
        'string.email': 'Enter a valid email'
    }),
    password: joi_1.default.string().required().messages({
        'string.empty': 'Password cannot be empty',
    })
});
