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
const typeorm_1 = require("typeorm");
const bcryptjs_1 = require("bcryptjs");
const User_1 = __importDefault(require("../models/User"));
const AppError_1 = __importDefault(require("../errors/AppError"));
// Criando uma classe para regras de cadastro de usuário.
class CreateUserService {
    execute({ login, email, password, passwordConfirmation, name, age, gender, martialStatus, isPregnant, isLactating }) {
        return __awaiter(this, void 0, void 0, function* () {
            // Conectando-se com o modelo do banco de dados
            const usersRepository = typeorm_1.getRepository(User_1.default);
            // Conferindo se o email informado já foi cadastrado
            const checkUserExist = yield usersRepository.findOne({
                where: { email },
            });
            // Caso sim, lança uma nova excessão
            if (checkUserExist) {
                throw new AppError_1.default('Email já está em uso.');
            }
            /* Conferindo a senha informada pelo usuário e
             comparando com a confimação, caso sejam
             diferentes, lança uma excessão. */
            if (password !== passwordConfirmation) {
                throw new AppError_1.default('Senhas diferentes, por favor confirme-a');
            }
            // Criptografando a senha antes de passar para o banco
            const hashedPassword = yield bcryptjs_1.hash(password, 8);
            // Criando um novo usuário
            const user = usersRepository.create({
                login,
                email,
                password: hashedPassword,
                name,
                age,
                gender,
                martialStatus,
                isPregnant,
                isLactating
            });
            // Salvando o usuário no banco de dados.
            yield usersRepository.save(user);
            return user;
        });
    }
}
exports.default = CreateUserService;
