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
exports.deleteAnswer = exports.addAnswer = exports.getOneAnswer = exports.getAllAnswers = void 0;
const mssql_1 = __importDefault(require("mssql"));
const uuid_1 = require("uuid");
const db_config_1 = __importDefault(require("../Config/db-config"));
// get all answers controller
const getAllAnswers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(db_config_1.default);
        const answers = yield (yield pool.request().execute('getAllAnswers')).recordset;
        res.status(200).json(answers);
    }
    catch (error) {
        res.status(404).json(error.message);
    }
});
exports.getAllAnswers = getAllAnswers;
// get one answer
const getOneAnswer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const pool = yield mssql_1.default.connect(db_config_1.default);
        const answer = yield (yield pool.request()
            .input('id', id)
            .execute('getAnswersById')).recordset[0];
        if (!answer) {
            res.status(400).json({ message: 'Question Not Found' });
        }
        res.status(201).json(answer);
    }
    catch (error) {
        res.status(404).json(error.message);
    }
});
exports.getOneAnswer = getOneAnswer;
// Answer a question
function addAnswer(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const answerId = (0, uuid_1.v4)();
            const questionId = (0, uuid_1.v4)();
            const userId = (0, uuid_1.v4)();
            const { answer, timeCreated } = req.body;
            const pool = yield mssql_1.default.connect(db_config_1.default);
            yield pool.request()
                .input('id', answerId)
                .input('answer', answer)
                .input('timeCreated', timeCreated)
                .input('userId', userId)
                .input('questionId', questionId)
                .execute('InsertUpdateAnswer');
            res.status(201).json(({ message: 'Answer Added' }));
        }
        catch (error) {
            res.status(404).json(error.message);
        }
    });
}
exports.addAnswer = addAnswer;
// delete answer
const deleteAnswer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(db_config_1.default);
        const oneAnswer = yield (yield pool.request()
            .input('id', req.params.id)
            .execute('getAnswersById')).recordset[0];
        if (oneAnswer) {
            yield pool.request().input('id', req.params.id).execute('deleteAnswer');
            return res.status(201).json(({ message: 'Answer Deleted' }));
        }
        res.status(404).json(({ error: 'Answer Not Found' }));
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.deleteAnswer = deleteAnswer;
