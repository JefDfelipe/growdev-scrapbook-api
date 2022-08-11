import { UserRepository } from '../database/repositories';
import { UserDTO } from '../dto';

export class UserService {
    async find() {
        const repository = new UserRepository();
        const user = await repository.find();

        return user.map(user => {
            return {
                id: user.id,
                email: user.email,
                notes: user.notes
            }
        });
    }

    async findOne(id: number) {
        const repository = new UserRepository();
        const user = await repository.findOne(id);

        return user;
    }

    create(userDTO: UserDTO) {
        const repository = new UserRepository();
        const user = repository.create(userDTO);

        return {
            id: user.id,
            email: user.email
        }
    }

    async update(userDTO: UserDTO) {
        const repository = new UserRepository();
        const user = await repository.update(userDTO);

        return user;
    }

    async delete(userID: number) {
        const repository = new UserRepository();
        await repository.delete(userID);
    }
}