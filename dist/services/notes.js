"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesService = void 0;
const repositories_1 = require("../database/repositories");
class NotesService {
    async find() {
        const repository = new repositories_1.NotesRepository();
        const notes = await repository.find();
        return notes;
    }
    async findOne(id) {
        const repository = new repositories_1.NotesRepository();
        const notes = await repository.findOne(id);
        return notes;
    }
    create(notesDTO) {
        const repository = new repositories_1.NotesRepository();
        const notes = repository.create(notesDTO);
        return notes;
    }
    async update(notesDTO) {
        const repository = new repositories_1.NotesRepository();
        const notes = await repository.update(notesDTO);
        return notes;
    }
    async delete(notesID) {
        const repository = new repositories_1.NotesRepository();
        await repository.delete(notesID);
    }
}
exports.NotesService = NotesService;
