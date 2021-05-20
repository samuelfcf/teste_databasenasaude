"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Classe genérica de erro para a aplicação
class AppError {
    // Utilizando um construtor para inicializar a classe
    constructor(message, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }
}
exports.default = AppError;
