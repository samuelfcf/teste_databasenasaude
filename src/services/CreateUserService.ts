import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User, { Gender, martialStatus } from '../models/User';

import AppError from '../errors/AppError';
// Criando uma interface para definir os tipos recebidos
interface Request {
  login: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  name: string;
  age: number;
  gender: Gender;
  martialStatus: martialStatus;
  isPregnant: boolean;
  isLactating: boolean;
}

// Criando uma classe para regras de cadastro de usuário.
class CreateUserService {
  public async execute({ login, email, password, passwordConfirmation, name, age, gender, martialStatus, isPregnant, isLactating}:Request): Promise<User> {
    // Conectando-se com o modelo do banco de dados
    const usersRepository = getRepository(User);

    // Conferindo se o email informado já foi cadastrado
    const checkUserExist = await usersRepository.findOne({
      where: { email },
    });
    // Caso sim, lança uma nova excessão
    if(checkUserExist) {
      throw new AppError('Email já está em uso.');
    }
    /* Conferindo a senha informada pelo usuário e
     comparando com a confimação, caso sejam
     diferentes, lança uma excessão. */
    if(password!==passwordConfirmation) {
      throw new AppError('Senhas diferentes, por favor confirme-a');
    }
    // Criptografando a senha antes de passar para o banco
    const hashedPassword = await hash(password, 8);
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
    await usersRepository.save(user);
    return user;
  }
}

export default CreateUserService;
