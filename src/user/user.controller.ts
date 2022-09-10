import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import User from './user.model';
import { UserService } from './user.service';

@ApiTags('Пользователи')
@Controller('user')
export class UserController {
    constructor(private userServise: UserService){}

    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status:200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.userServise.createUser(userDto)
    }

    @ApiOperation({summary: 'Получение пользователей'})
    @ApiResponse({status:200, type: [User]})
    @Get()
    getAll(){
        return this.userServise.getAllUsers();
    }
}
