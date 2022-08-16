import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userServise;
    constructor(userServise: UserService);
    create(userDto: CreateUserDto): Promise<import("./user.model").default>;
    getAll(): Promise<import("./user.model").default[]>;
}
