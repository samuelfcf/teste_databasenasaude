// Declarando um tipo específico para ficar disponível em todas as rotas
declare namespace Express {
  export interface Request {
    // Passando o id para caso seja necessário
    user: {
      id: string;
    }
  }
}
