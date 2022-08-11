import { Request, Response } from 'express';
import { NotesService } from '../services';
import { NotesDTO } from '../dto';

export default class NotesController {
    async index(request: Request, response: Response) {
        const service = new NotesService();
        const notes = await service.find();

        return response.json(notes);
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const service = new NotesService();
        const notes = await service.findOne(parseInt(id));

        return response.json(notes);
    }

    async store(request: Request, response: Response) {
        const { description, date } = request.body;
        const notesService = new NotesService();
        const dto: NotesDTO = {
            description,
            date
        };

        const notes = await notesService.create(dto);

        return response.json(notes);
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { description, date } = request.body;
        const notesService = new NotesService();
        const notes = await notesService.update({
            id: parseInt(id),
            description,
            date
        });

        return response.json(notes);
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const notesService = new NotesService();

        await notesService.delete(parseInt(id));

        return response.sendStatus(204);
    }
};