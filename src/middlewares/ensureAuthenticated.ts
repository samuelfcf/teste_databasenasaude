import authConfig from '../config/auth';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import AppError from '../errors/AppError';

export default function ensureAuthenticated(request: Request, response: Response, next: NextFunction): void {

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token JWT não existe', 401);
  }

  const [, token] = authHeader.split(' ');


  const decoded = verify(token, authConfig.jwt.secret);

  return next();


}
