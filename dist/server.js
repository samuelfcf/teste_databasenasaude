"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//bibliote que permite o uso das variáveis de ambiente no projeto
const dotenv_1 = __importDefault(require("dotenv"));
// Esse é a biblioteca que executa o nosso backend, oficialmente
const express_1 = __importStar(require("express"));
const routes_1 = __importDefault(require("./routes"));
require("express-async-errors");
require("./database"); //importando conexão com bando de dados
const AppError_1 = __importDefault(require("./errors/AppError"));
// inicializando o app
const app = express_1.default();
/* Essa linha indica para o express que os Request Params
vão ser recebidos em formato json para que ele consiga ler sem erros. */
app.use(express_1.json());
//Passando as rotas para inicialização
app.use(routes_1.default);
app.use((err, request, response, _) => {
    if (err instanceof AppError_1.default) {
        return response.status(err.statusCode).json({
            status: 'Error',
            message: err.message,
        });
    }
    console.error(err);
    return response.status(500).json({
        status: 'Error',
        message: 'Internal server error'
    });
});
dotenv_1.default.config(); // reconhecer variáveis de ambiente do .env
// Disponibilizando a porta para escuta de forma dinâmica
app.listen(process.env.PORT || 3333, () => {
    // Limpando o console e mostrando uma mensagem quando o app executa
    console.clear();
    console.log('Backend started!');
});
