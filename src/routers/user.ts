import { Router } from 'express';
import UserController from '../controllers/user';
import { HttpRouter } from '../contracts';

export default class UserRoutes implements HttpRouter {
    init() {
        const routes = Router();
        const controller = new UserController();

        routes.get('/users', controller.index);
        routes.get('/user/:id', controller.show);
        routes.post('/user', controller.store);
        routes.put('/user/:id', controller.update);
        routes.delete('/user/:id', controller.delete);

        return routes;
    }
}