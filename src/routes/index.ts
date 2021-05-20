import { Router } from 'express';
// Importanto as rotas para usuário e sessão
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();
// Definindo os endpoints
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
export default routes;
