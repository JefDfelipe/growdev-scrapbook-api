"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesRepository = void 0;
const entities_1 = require("../entities");
class NotesRepository {
    async find() {
        const notes = await entities_1.NotesEntity.find();
        return notes;
    }
    ;
    async findOne(id) {
        const notes = await entities_1.NotesEntity.findOne(id);
        return notes;
    }
    ;
    create(notesDTO) {
        const notes = new entities_1.NotesEntity(notesDTO.description, notesDTO.date);
        notes.save();
        return notes;
    }
    ;
    async update(notesDTO) {
        const notes = await entities_1.NotesEntity.findOne(notesDTO.id);
        if (notes) {
            notes.description = notesDTO.description;
            notes.date = notesDTO.date;
            await notes.save();
        }
        ;
        return notes;
    }
    ;
    async delete(notesID) {
        await entities_1.NotesEntity.delete(notesID);
    }
    ;
}
exports.NotesRepository = NotesRepository;
;
