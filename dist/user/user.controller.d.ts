import { CreateUserDto } from './dto/create-user.dto';
import User from './user.model';
import { UserService } from './user.service';
export declare class UserController {
    private userServise;
    constructor(userServise: UserService);
    create(userDto: CreateUserDto): Promise<User>;
    getAll(): Promise<User[]>;
}
