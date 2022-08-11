import { NotesEntity } from '../entities';
import { NotesDTO } from '../../dto';

export class NotesRepository {

    async find() {
        const notes = await NotesEntity.find();

        return notes;
    };

    async findOne(id: number) {
        const notes = await NotesEntity.findOne(id);

        return notes;
    };

    create(notesDTO: NotesDTO) {
        const notes = new NotesEntity(notesDTO.description, notesDTO.date);
        notes.save();

        return notes;
    };

    async update(notesDTO: NotesDTO) {
        const notes = await NotesEntity.findOne(notesDTO.id);

        if (notes) {
            notes.description = notesDTO.description;
            notes.date = notesDTO.date;

            await notes.save();
        };

        return notes;
    };

    async delete(notesID: number) {
        await NotesEntity.delete(notesID);
    };
};