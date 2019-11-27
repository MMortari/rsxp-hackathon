import { Router } from 'express';

import SubjectController from './app/controllers/SubjectController';
import ContentController from './app/controllers/ContentController';
import LessonController from './app/controllers/LessonController';

const routes = Router();

// Lista todas as matérias
routes.get('/subjects', SubjectController.list);
// Lista todos os conteúdos da matéria
routes.get('/subjects/:subjectId/contents', ContentController.list);
// Lista todas as lições dos conteúdos da matéria
routes.get('/contents/:contentId/lessons', LessonController.list);
// Lista todas uma lição dos conteúdos da matéria
routes.get('/lessons/:id', LessonController.listOne);

export default routes;
