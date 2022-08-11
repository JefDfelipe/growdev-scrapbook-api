"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const entities_1 = require("../entities");
class UserRepository {
    async find() {
        const user = await entities_1.UserEntity.find();
        return user;
    }
    async findOne(id) {
        const user = await entities_1.UserEntity.findOne(id);
        return user;
    }
    create(userDTO) {
        const user = new entities_1.UserEntity(userDTO.email, userDTO.password);
        user.save();
        return user;
    }
    async update(userDTO) {
        const user = await entities_1.UserEntity.findOne(userDTO.id);
        if (user) {
            user.email = userDTO.email;
            user.password = userDTO.password;
            await user.save();
        }
        return user;
    }
    async delete(userID) {
        await entities_1.UserEntity.delete(userID);
    }
}
exports.UserRepository = UserRepository;
