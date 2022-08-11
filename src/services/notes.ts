import { NotesRepository } from '../database/repositories';
import { NotesDTO } from '../dto';

export class NotesService {
    async find() {
        const repository = new NotesRepository();
        const notes = await repository.find();

        return notes;
    }

    async findOne(id: number) {
        const repository = new NotesRepository();
        const notes = await repository.findOne(id);

        return notes;
    }

    create(notesDTO: NotesDTO) {
        const repository = new NotesRepository();
        const notes = repository.create(notesDTO);

        return notes;
    }

    async update(notesDTO: NotesDTO) {
        const repository = new NotesRepository();
        const notes = await repository.update(notesDTO);

        return notes;
    }

    async delete(notesID: number) {
        const repository = new NotesRepository();
        await repository.delete(notesID);
    }
}