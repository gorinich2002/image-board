import { CreateUserDto } from './dto/create-user.dto';
import User from './user.model';
export declare class UserService {
    private userRepository;
    constructor(userRepository: typeof User);
    createUser(userDto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
}
