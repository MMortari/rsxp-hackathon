import { Router } from 'express';

import SubjectController from './app/controllers/SubjectController';
import ContentController from './app/controllers/ContentController';
import LessonController from './app/controllers/LessonController';

const routes = Router();

// SUBJECTS
routes.get('/subjects', SubjectController.list);
routes.get('/subjects/:id', SubjectController.listOne);
// CONTENTS
routes.get('/contents', ContentController.list);
routes.get('/contents/:id', ContentController.listOne);
// LESSONS
routes.get('/lessons', LessonController.list);
routes.get('/lessons/:id', LessonController.listOne);

export default routes;
