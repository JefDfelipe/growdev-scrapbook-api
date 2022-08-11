import { Request, Response } from 'express';
import { NotesService, UserService } from '../services';
import { UserDTO } from '../dto';

export default class UserController {
    async index(request: Request, response: Response) {
        const service = new UserService();
        const users = await service.find();

        return response.json(users);
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const service = new UserService();
        const users = await service.findOne(parseInt(id));

        return response.json(users);
    }

    async store(request: Request, response: Response) {
        const { email, password, notes } = request.body;
        const userService = new UserService();
        const notesService = new NotesService();
        const dto: UserDTO = {
            email,
            password,
            notes: []
        };

        notes.forEach(async (notes: number) => {
            const resultQuery = await notesService.findOne(notes);

            if (resultQuery && resultQuery.id) {
                dto.notes?.push(resultQuery.id);
            }
        });

        const user = await userService.create(dto);

        return response.json(user);
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { email, password } = request.body;
        const userService = new UserService();
        const user = await userService.update({
            id: parseInt(id),
            email,
            password
        });

        return response.json(user);
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const userService = new UserService();

        await userService.delete(parseInt(id));

        return response.sendStatus(204);
    }
};