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
const express_1 = require("express");
const CreateUserService_1 = __importDefault(require("../services/CreateUserService"));
const User_1 = __importDefault(require("../models/User"));
const typeorm_1 = require("typeorm");
const usersRouter = express_1.Router();
// Fazendo uma rota de cadastro de usuários
usersRouter.post('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    // Pegando os dados enviados pelo cliente
    const { login, email, password, passwordConfirmation, name, age, gender, martialStatus, isPregnant, isLactating } = request.body;
    // Criando um objeto para acesso aos métodos da classe
    const createUser = new CreateUserService_1.default();
    // Passando para o método os dados necessários e esperando a resposta
    const user = yield createUser.execute({
        login,
        email,
        password,
        passwordConfirmation,
        name,
        age,
        gender,
        martialStatus,
        isPregnant,
        isLactating
    });
    // Tirando a senha do retorno para o cliente
    // @ts-expect-error
    delete user.password;
    return response.status(201).json(user);
}));
// Rota para listagem de usuários cadastrados
usersRouter.get('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const repo = typeorm_1.getRepository(User_1.default);
    const resp = yield repo.find();
    return response.status(201).json(resp);
}));
exports.default = usersRouter;
