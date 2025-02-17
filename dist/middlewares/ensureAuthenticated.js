"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("../config/auth"));
const jsonwebtoken_1 = require("jsonwebtoken");
const AppError_1 = __importDefault(require("../errors/AppError"));
function ensureAuthenticated(request, response, next) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new AppError_1.default('Token JWT não existe', 401);
    }
    const [, token] = authHeader.split(' ');
    const decoded = jsonwebtoken_1.verify(token, auth_1.default.jwt.secret);
    return next();
}
exports.default = ensureAuthenticated;
