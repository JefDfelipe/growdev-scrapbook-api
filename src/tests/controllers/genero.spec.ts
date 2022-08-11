import NotesController from '../../controllers/2';
import { UserService } from '../../services';
import { CacheRepository } from '../../database/repositories';
import { Request, Response } from 'express';
import { HttpError } from '../../errors';
import { defaultErrorMessage, HttpInternalErrorCode } from '../../constants';

jest.mock('../../src/database/repositories/genero.ts');
jest.mock('../../src/database/repositories');

// SUT -> system under test
const makeSut = () => new NotesController(new UserService(), new CacheRepository());

describe('Genero Controller', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    describe('Index (List)', () => {
        it('should return ...', async () => {
            const sut = makeSut();
            const dto = [{
                id: 1, 
                nome: 'any_nome'
            }];

            jest.spyOn(UserService.prototype, 'find')
                .mockResolvedValue(dto);
            
            const request = {} as Request;
            const response: any = {
                json: jest.fn().mockResolvedValue(dto),
                status: jest.fn()
            };
            
            const responseController = await sut.index(request, response);
            
            expect(responseController).toEqual(dto);
            expect(responseController).toHaveLength(1);
        });

        it('should call CacheRepository...', async () => {
            const sut = makeSut();
            const dto = [{
                nome: 'ANY_NOME'
            }];

            jest.spyOn(UserService.prototype, 'find').mockResolvedValue(dto.map(item => ({...item, id: 1})));

            const getSpy = jest.spyOn(CacheRepository.prototype, 'find').mockResolvedValue(null);
            const setSpy = jest.spyOn(CacheRepository.prototype, 'save');

            const request = {} as Request;
            const response: any = {
                json: jest.fn().mockResolvedValue(dto),
                status: jest.fn()
            };

            await sut.index(request, response);

            expect(getSpy).toHaveBeenCalledWith('genero:all');
            expect(setSpy).toHaveBeenCalledWith('genero:all', dto);
        });

        /*it('should throw new error...', async () => {
            const sut = makeSut();
            const dto = [{
                nome: 'ANY_NOME'
            }];

            jest.spyOn(CacheRepository.prototype, 'find')
                .mockRejectedValue(new Error('Cache indisponivel'));

            const request = {} as Request;
            const response: any = {
                json: jest.fn().mockResolvedValue(dto),
                status: jest.fn()
            };
            const responseController = await sut.index(request, response);

            expect(responseController).toEqual({json: defaultErrorMessage});
        });*/
    });

    describe('Post', () => {
        it('should create...', async () => {
            const sut = makeSut();
            const dto = {
                id: 1, 
                nome: 'any_nome'
            };

            jest.spyOn(UserService.prototype, 'create')
                .mockResolvedValue(dto);

            const request = {
                body: {
                    nome: 'TESTE'
                }
            } as Request;
            const response: any = {
                json: jest.fn().mockResolvedValue(dto),
                status: jest.fn()
            };

            const responseController = await sut.store(request, response);

            expect(responseController).toBeTruthy();
            expect(responseController).toHaveProperty('nome');

            expect.assertions(2);
        });

        /*t('should throw a error...', async () => {
            const sut = makeSut();
            const dto = {
                id: 1, 
                nome: 'any_nome'
            };

            jest.spyOn(GeneroService.prototype, 'create')
                .mockResolvedValue(dto);

            const request = {
                body: {}
            } as Request;            
            const response: any = {
                json: jest.fn().mockResolvedValue(dto),
                status: jest.fn()
            };

            const responseController = await sut.store(request, response);

            expect(responseController.status).toBe(400);
            expect(responseController.json).toHaveProperty('message');
        });*/
        /**
         * Fluxo ideal
         * Informações faltando
         * Campo com formatação não permitada (tipo ou tamanhos)
         * Se tá limpando o cache
         * Testar error no geral
         * Se o service está sendo chamado com os parametros corretos (ou se tá retornando certo)
         */
    });
});