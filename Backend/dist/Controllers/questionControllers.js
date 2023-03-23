"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteQuestion = exports.updateQuestion = exports.addQuestion = exports.getOneQuestion = exports.getAllQuestions = void 0;
const mssql_1 = __importDefault(require("mssql"));
const uuid_1 = require("uuid");
const db_config_1 = __importDefault(require("../Config/db-config"));
const Helpers_1 = require("../Helpers");
// get all questions controller
const getAllQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(db_config_1.default);
        const questions = yield (yield pool.request().execute('getAllQuestions')).recordset;
        return res.status(200).json(questions);
    }
    catch (error) {
        return res.status(404).json(error.message);
    }
});
exports.getAllQuestions = getAllQuestions;
// get one question
const getOneQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const pool = yield mssql_1.default.connect(db_config_1.default);
        const question = yield (yield pool.request()
            .input('id', id)
            .execute('getQuestionById')).recordset[0];
        if (!question) {
            res.status(400).json({ message: 'Question Not Found' });
        }
        return res.status(201).json(question);
    }
    catch (error) {
        return res.status(404).json(error.message);
    }
});
exports.getOneQuestion = getOneQuestion;
// add questions controller
function addQuestion(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const questionId = (0, uuid_1.v4)();
            const { title, category, question } = req.body;
            const { error } = Helpers_1.questionSchema.validate(req.body);
            if (error) {
                res.status(422).json(error.details[0].message);
            }
            const pool = yield mssql_1.default.connect(db_config_1.default);
            yield pool.request()
                .input('id', questionId)
                .input('title', title)
                .input('category', category)
                .input('question', question)
                .execute('InsertUpdateQuestion');
            return res.status(201).json(({ message: 'Question Added' }));
        }
        catch (error) {
            return res.status(500).json(error.message);
        }
    });
}
exports.addQuestion = addQuestion;
// update question controller
function updateQuestion(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { title, category, question } = req.body;
            const pool = yield mssql_1.default.connect(db_config_1.default);
            const oneQuestion = yield (yield pool.request()
                .input('id', req.params.id)
                .execute('getQuestionById')).recordset[0];
            if (oneQuestion) {
                yield pool.request()
                    .input('id', req.params.id)
                    .input('title', title)
                    .input('category', category)
                    .input('question', question)
                    .execute('InsertUpdateQuestion');
                return res.status(201).json(({ message: 'Question Updated' }));
            }
            return res.status(404).json(({ error: 'Question Not Found' }));
        }
        catch (error) {
            return res.status(500).json(error.message);
        }
    });
}
exports.updateQuestion = updateQuestion;
// Delete Question
const deleteQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(db_config_1.default);
        const oneQuestion = yield (yield pool.request()
            .input('id', req.params.id)
            .execute('getQuestionById')).recordset[0];
        if (oneQuestion) {
            yield pool.request().input('id', req.params.id).execute('deleteQuestion');
            return res.status(201).json(({ message: 'Question Deleted' }));
        }
        res.status(404).json(({ error: 'Question Not Found' }));
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.deleteQuestion = deleteQuestion;
