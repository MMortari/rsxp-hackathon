import { Router } from 'express';

import TesteController from './app/controllers/TesteController';

const routes = Router();

routes.get('/', TesteController.list);

export default routes;
