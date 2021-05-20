import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';

import AppError from '../errors/AppError';

import User from '../models/User';
// Criando uma interface para definir os tipos
interface Request {
  login: string;
  password: string;
}
interface Response {
  user: User;
  token: string;
}
// Criando uma classe para os serviços
// e regras de negócio de autenticação.
class AuthenticateUserService {
  public async execute({login, password}:Request):Promise<Response> {
   
    // Conectando-se com os dados do modelo do banco
    const usersRepository = getRepository(User);
    // Conferindo se o login informado existe no banco
    const user = await usersRepository.findOne({
      where: { login },
    });

    // Caso não exista, Lança uma nova excessão
    if(!user) {
      throw new AppError('Email ou Senha inválidos', 401);
    }

    // Conferindo se a senha informada confere com a cadastrada
    const passwordMatched = await compare(password, user.password);
    // Caso não, lança uma excessão
    if(!passwordMatched) {
      throw new AppError('Email ou Senha inválidos', 401);
    }
    const { secret, expiresIn } = authConfig.jwt
    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });
    return {
      user,
      token,
    }
  }
}

export default AuthenticateUserService;
