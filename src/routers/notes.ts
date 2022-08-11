import { Router } from 'express';
import NotesController from '../controllers/user';
import { HttpRouter } from '../contracts';

export default class NotesRoutes implements HttpRouter {
    init() {
        const routes = Router();
        const controller = new NotesController();

        routes.get('/notes', controller.index);
        routes.get('/notes/:id', controller.show);
        routes.post('/notes', controller.store);
        routes.put('/notes/:id', controller.update);
        routes.delete('/notes/:id', controller.delete);

        return routes;
    }
}