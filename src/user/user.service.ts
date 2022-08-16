import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import User from './user.model';

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private userRepository: typeof User){}

    async createUser(userDto:CreateUserDto){
        const user = await this.userRepository.create(userDto);
        return user;
    }

    // async getUser(email: string){
    //     const user = await this.userRepository.findOne({email})
    //     return user;
    // }

    async getAllUsers(){
        const users = await this.userRepository.findAll();
        return users;
    }
}
