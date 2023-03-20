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
exports.deleteComment = exports.updateComment = exports.addComment = exports.getOneComment = exports.getAllComments = void 0;
const mssql_1 = __importDefault(require("mssql"));
const uuid_1 = require("uuid");
const db_config_1 = __importDefault(require("../Config/db-config"));
// get all comments controller
const getAllComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(db_config_1.default);
        const answers = yield (yield pool.request().execute('getAllComments')).recordset;
        res.status(200).json(answers);
    }
    catch (error) {
        res.status(404).json(error.message);
    }
});
exports.getAllComments = getAllComments;
// get one comment
const getOneComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const pool = yield mssql_1.default.connect(db_config_1.default);
        const comment = yield (yield pool.request()
            .input('id', id)
            .execute('getCommentById')).recordset[0];
        if (!comment) {
            res.status(400).json({ message: 'Comment Not Found' });
        }
        res.status(201).json(comment);
    }
    catch (error) {
        res.status(404).json(error.message);
    }
});
exports.getOneComment = getOneComment;
// Add comment
function addComment(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const commentId = (0, uuid_1.v4)();
            const { comment, timeCreated, userId, answerId } = req.body;
            const pool = yield mssql_1.default.connect(db_config_1.default);
            yield pool.request()
                .input('id', commentId)
                .input('comment', comment)
                .input('answerId', answerId)
                .input('userId', userId)
                .input('timeCreated', timeCreated)
                .execute('InsertUpdateComment');
            res.status(201).json(({ message: 'Comment Added Successfully' }));
        }
        catch (error) {
            res.status(500).json(error.message);
        }
    });
}
exports.addComment = addComment;
// update answer controller
function updateComment(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { comment, timeCreated, userId, answerId } = req.body;
            const pool = yield mssql_1.default.connect(db_config_1.default);
            const oneComment = yield (yield pool.request()
                .input('id', req.params.id)
                .execute('getCommentById')).recordset[0];
            if (oneComment) {
                yield pool.request()
                    .input('id', req.params.id)
                    .input('comment', comment)
                    .input('answerId', answerId)
                    .input('userId', userId)
                    .input('timeCreated', timeCreated)
                    .execute('InsertUpdateComment');
                return res.status(201).json(({ message: 'Comment Updated' }));
            }
            res.status(404).json(({ error: 'Comment Not Found' }));
        }
        catch (error) {
            res.status(500).json(error.message);
        }
    });
}
exports.updateComment = updateComment;
// delete Comment
const deleteComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(db_config_1.default);
        const oneComment = yield (yield pool.request()
            .input('id', req.params.id)
            .execute('getCommentById')).recordset[0];
        if (oneComment) {
            yield pool.request().input('id', req.params.id).execute('deleteComment');
            return res.status(201).json(({ message: 'Comment Deleted' }));
        }
        res.status(404).json(({ error: 'Answer Not Found' }));
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.deleteComment = deleteComment;
