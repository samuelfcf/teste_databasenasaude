// Classe genérica de erro para a aplicação
export default class AppError {
  // Recebe uma mensagem
  public readonly message: string;
  // Recebe o código de status http
  public readonly statusCode: number;
  // Utilizando um construtor para inicializar a classe
  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}
