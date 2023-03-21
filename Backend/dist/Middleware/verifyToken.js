"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../env') });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function verifyToken(req, res, next) {
    const token = req.headers['token'];
    console.log(req.header);
    try {
        if (!token) {
            return res.status(401).json({ error: 'Forbidden' });
        }
        const payloadData = jsonwebtoken_1.default.verify(token, process.env.SECRETKEY);
        req.info = payloadData;
    }
    catch (error) {
        return res.status(403).json(error.message);
    }
    next();
}
exports.verifyToken = verifyToken;
