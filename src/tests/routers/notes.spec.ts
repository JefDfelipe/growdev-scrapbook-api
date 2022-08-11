import Application from '../../app';
import request from 'supertest';
import { NotesService } from '../../services/notes'

jest.mock('../../services');

describe('Genero Router', () => {
    const application = new Application();
    application.init();

    beforeEach(() => {
        jest.resetAllMocks();
    });

    describe('POST /notes', () => {
        it('should return 200...', async () => {
            const dto = {
                id: 1,
                description: 'Teste',
                date: new Date(),
            }

            jest.spyOn(NotesService.prototype, 'create')
                .mockResolvedValue(dto);

            await request(application.server).post('/genero')
                                 .send({
                                     nome: 'Teste'
                                 })
                                 .expect(200, dto);
        });

        it('should return 400...', async () => {
            await request(application.server).post('/genero')
                                 .send({
                                     nome: null
                                 })
                                 .expect(400, {});

            await request(application.server).post('/genero')
                                .send({
                                    nome: 'a'
                                })
                                .expect(400, {});
        });

        /*it('should return 500...', async () => {
            jest.spyOn(GeneroService.prototype, 'create')
                .mockRejectedValue(new Error());

            const response = await request(application.server).post('/genero')
                                                              .send({nome: 'Teste'});
            expect(response.status).toBe(500);
        });*/
    });

    describe('GET /genero', () => {
        // TODO
    });

    describe('GET /genero/:id', () => {
        // TODO
    });
    
    describe('DELETE /genero/:id', () => {});
    describe('PUT /genero/:id', () => {});
});