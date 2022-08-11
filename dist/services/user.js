"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const repositories_1 = require("../database/repositories");
class UserService {
    async find() {
        const repository = new repositories_1.UserRepository();
        const user = await repository.find();
        return user.map(user => {
            return {
                id: user.id,
                email: user.email,
                notes: user.notes
            };
        });
    }
    async findOne(id) {
        const repository = new repositories_1.UserRepository();
        const user = await repository.findOne(id);
        return user;
    }
    create(userDTO) {
        const repository = new repositories_1.UserRepository();
        const user = repository.create(userDTO);
        return {
            id: user.id,
            email: user.email
        };
    }
    async update(userDTO) {
        const repository = new repositories_1.UserRepository();
        const user = await repository.update(userDTO);
        return user;
    }
    async delete(userID) {
        const repository = new repositories_1.UserRepository();
        await repository.delete(userID);
    }
}
exports.UserService = UserService;
