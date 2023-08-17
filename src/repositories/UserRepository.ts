import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export class UserRepository {
    private userRepository: Repository<User>;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    public async getAllUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }

    public async getUserById(id: string): Promise<User> {
        return await this.userRepository.findOne({
            where: {
                id
            }
        });
    }

    public async getUserByEmail(email: string): Promise<User> {
        return await this.userRepository.findOne({
            where: {
                email
            }
        });
    }

    public async createUser(user: User): Promise<User> {
        console.log(user)
        return await this.userRepository.save(user);
    }

    public async updateUser(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }
}