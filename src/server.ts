//bibliote que permite o uso das variáveis de ambiente no projeto
import dotenv from 'dotenv';
// Esse é a biblioteca que executa o nosso backend, oficialmente
import express, { json, Request, Response, NextFunction, response } from 'express';
import routes from './routes';
import 'express-async-errors';
import './database' //importando conexão com bando de dados

import AppError from './errors/AppError';
// inicializando o app
const app = express();


/* Essa linha indica para o express que os Request Params
vão ser recebidos em formato json para que ele consiga ler sem erros. */
app.use(json());
//Passando as rotas para inicialização
app.use(routes);

app.use((err: Error, request: Request,
  response:Response, _: NextFunction) => {
    if(err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'Error',
        message: err.message,
      });
    }

    console.error(err);

    return response.status(500).json({
      status: 'Error',
      message: 'Internal server error'
    })
});

dotenv.config(); // reconhecer variáveis de ambiente do .env

// Disponibilizando a porta para escuta de forma dinâmica
app.listen(process.env.PORT || 3333, () => {
  // Limpando o console e mostrando uma mensagem quando o app executa
  console.clear();
  console.log('Backend started!');
});
