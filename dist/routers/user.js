"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("../controllers/user"));
class UserRoutes {
    init() {
        const routes = (0, express_1.Router)();
        const controller = new user_1.default();
        routes.get('/users', controller.index);
        routes.get('/user/:id', controller.show);
        routes.post('/user', controller.store);
        routes.put('/user/:id', controller.update);
        routes.delete('/user/:id', controller.delete);
        return routes;
    }
}
exports.default = UserRoutes;
