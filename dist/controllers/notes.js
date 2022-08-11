"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
class NotesController {
    async index(request, response) {
        const service = new services_1.NotesService();
        const notes = await service.find();
        return response.json(notes);
    }
    async show(request, response) {
        const { id } = request.params;
        const service = new services_1.NotesService();
        const notes = await service.findOne(parseInt(id));
        return response.json(notes);
    }
    async store(request, response) {
        const { description, date } = request.body;
        const notesService = new services_1.NotesService();
        const dto = {
            description,
            date
        };
        const notes = await notesService.create(dto);
        return response.json(notes);
    }
    async update(request, response) {
        const { id } = request.params;
        const { description, date } = request.body;
        const notesService = new services_1.NotesService();
        const notes = await notesService.update({
            id: parseInt(id),
            description,
            date
        });
        return response.json(notes);
    }
    async delete(request, response) {
        const { id } = request.params;
        const notesService = new services_1.NotesService();
        await notesService.delete(parseInt(id));
        return response.sendStatus(204);
    }
}
exports.default = NotesController;
;
