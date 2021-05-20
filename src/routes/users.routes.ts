import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';
import User from '../models/User';
import {getRepository} from 'typeorm';

const usersRouter = Router();

// Fazendo uma rota de cadastro de usuários
usersRouter.post('/', async (request, response) => {
    // Pegando os dados enviados pelo cliente
    const { login, email, password, passwordConfirmation, name, age, gender, martialStatus, isPregnant, isLactating } = request.body;
    // Criando um objeto para acesso aos métodos da classe
    const createUser = new CreateUserService();
    // Passando para o método os dados necessários e esperando a resposta
    const user = await createUser.execute({
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
});

// Rota para listagem de usuários cadastrados
usersRouter.get('/', async (request, response) => {
  const repo = getRepository(User);
  const resp = await repo.find();
  return response.status(201).json(resp)
});

export default usersRouter;
