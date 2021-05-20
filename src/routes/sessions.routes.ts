import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';
import AppError from '../errors/AppError';

const sessionsRouter = Router();


// Fazendo uma rota de cadastro de usuários
sessionsRouter.post('/', async (request, response) => {
   try{
      // Pegando o login e a senha enviados pelo usuário
    const { login, password } = request.body;
    // Criando um novo objeto AuthenticateUser
    // que terá acesso aos métodos da classe.
    const authenticateUser = new AuthenticateUserService();
    // Executando o método
    const { user, token } = await authenticateUser.execute({
      login,
      password
    })
    // Tirando a senha do retorno para o cliente
    // @ts-expect-error
    delete user.password;
    return response.json({ user, token });
   } catch (err) {
     return response.status(400).json({
       error: err.message
     })
   }
});

export default sessionsRouter;
