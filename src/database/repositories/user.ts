import { UserEntity } from '../entities';
import { UserDTO } from '../../dto';

export class UserRepository {

    async find() {
        const user = await UserEntity.find();

        return user;
    }

    async findOne(id: number) {
        const user = await UserEntity.findOne(id);

        return user;
    }

    create(userDTO: UserDTO) {
        const user = new UserEntity(userDTO.email, userDTO.password);
        user.save();

        return user;
    }

    async update(userDTO: UserDTO) {
        const user = await UserEntity.findOne(userDTO.id);

        if (user) {
            user.email = userDTO.email;
            user.password = userDTO.password;
            await user.save();
        }

        return user;
    }

    async delete(userID: number) {
        await UserEntity.delete(userID);
    }
}