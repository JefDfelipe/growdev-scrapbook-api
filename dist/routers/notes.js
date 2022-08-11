"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("../controllers/user"));
const services_1 = require("../services");
const repositories_1 = require("../database/repositories");
class NotesRoutes {
    init() {
        const routes = (0, express_1.Router)();
        const service = new services_1.NotesService();
        const cacheRepository = new repositories_1.CacheRepository();
        const controller = new user_1.default(service, cacheRepository);
        routes.get('/notes', controller.index);
        routes.get('/notes/:id', controller.show);
        routes.post('/notes', controller.store);
        routes.put('/notes/:id', controller.update);
        routes.delete('/notes/:id', controller.delete);
        return routes;
    }
}
exports.default = NotesRoutes;
