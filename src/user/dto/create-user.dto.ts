import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{

    @ApiProperty({example:'admin@gmail.com', description:'Почтовый адрес'})
    readonly email: string;

    @ApiProperty({example:'123', description:'Пароль'})
    readonly password: string;
}