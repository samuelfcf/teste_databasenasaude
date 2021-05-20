"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// Importanto as rotas para usuário e sessão
const users_routes_1 = __importDefault(require("./users.routes"));
const sessions_routes_1 = __importDefault(require("./sessions.routes"));
const routes = express_1.Router();
// Definindo os endpoints
routes.use('/users', users_routes_1.default);
routes.use('/sessions', sessions_routes_1.default);
exports.default = routes;
