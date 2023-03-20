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
exports.LoginUser = exports.RegisterUser = void 0;
const mssql_1 = __importDefault(require("mssql"));
const uuid_1 = require("uuid");
const db_config_1 = __importDefault(require("../Config/db-config"));
const Helpers_1 = require("../Helpers");
const bcrypt_1 = __importDefault(require("bcrypt"));
function RegisterUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = (0, uuid_1.v4)();
            const { email, password } = req.body;
            const { error } = Helpers_1.authSchema.validate(req.body);
            if (error) {
                return res.status(422).json(error.details[0].message);
            }
            const pool = yield mssql_1.default.connect(db_config_1.default);
            const hashedPassword = yield bcrypt_1.default.hash(password, 10);
            yield pool.request()
                .input('id', id)
                .input('email', email)
                .input('password', hashedPassword)
                .execute('InsertUpdateUser');
            res.status(400).json({ message: 'User Registered' });
        }
        catch (error) {
            res.status(500).json(error);
        }
    });
}
exports.RegisterUser = RegisterUser;
function LoginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            const { error } = Helpers_1.authSchema.validate(req.body);
            if (error) {
                return res.status(422).json(error.details[0].message);
            }
            const pool = yield mssql_1.default.connect(db_config_1.default);
            const user = yield (yield pool.request().input('email', email).execute('GetUserByEmail')).recordset;
            console.log(user);
            if (!user[0]) {
                return res.status(404).json({ makosa: 'User Not found' });
            }
            const valid = yield bcrypt_1.default.compare(password, user[0].password);
            if (!valid) {
                return res.status(404).json({ error: 'password Not found' });
            }
            res.status(200).json({ message: 'User Loggedin' });
        }
        catch (error) {
            res.status(500).json(error);
        }
    });
}
exports.LoginUser = LoginUser;
