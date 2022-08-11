"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
class UserController {
    async index(request, response) {
        const service = new services_1.UserService();
        const users = await service.find();
        return response.json(users);
    }
    async show(request, response) {
        const { id } = request.params;
        const service = new services_1.UserService();
        const users = await service.findOne(parseInt(id));
        return response.json(users);
    }
    async store(request, response) {
        const { email, password, notes } = request.body;
        const userService = new services_1.UserService();
        const notesService = new services_1.NotesService();
        const dto = {
            email,
            password,
            notes: []
        };
        notes.forEach(async (notes) => {
            const resultQuery = await notesService.findOne(notes);
            if (resultQuery && resultQuery.id) {
                dto.notes?.push(resultQuery.id);
            }
        });
        const user = await userService.create(dto);
        return response.json(user);
    }
    async update(request, response) {
        const { id } = request.params;
        const { email, password } = request.body;
        const userService = new services_1.UserService();
        const user = await userService.update({
            id: parseInt(id),
            email,
            password
        });
        return response.json(user);
    }
    async delete(request, response) {
        const { id } = request.params;
        const userService = new services_1.UserService();
        await userService.delete(parseInt(id));
        return response.sendStatus(204);
    }
}
exports.default = UserController;
;
