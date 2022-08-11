"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../../app"));
const supertest_1 = __importDefault(require("supertest"));
const services_1 = require("../../services");
jest.mock('../../src/services/genero.ts');
describe('Genero Router', () => {
    const application = new app_1.default();
    application.init();
    beforeEach(() => {
        jest.resetAllMocks();
    });
    describe('POST /genero', () => {
        it('should return 200...', async () => {
            const dto = {
                id: 1,
                nome: 'Teste'
            };
            jest.spyOn(services_1.UserService.prototype, 'create')
                .mockResolvedValue(dto);
            await (0, supertest_1.default)(application.server).post('/genero')
                .send({
                nome: 'Teste'
            })
                .expect(200, dto);
        });
        it('should return 400...', async () => {
            await (0, supertest_1.default)(application.server).post('/genero')
                .send({
                nome: null
            })
                .expect(400, {});
            await (0, supertest_1.default)(application.server).post('/genero')
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
    describe('DELETE /genero/:id', () => { });
    describe('PUT /genero/:id', () => { });
});
