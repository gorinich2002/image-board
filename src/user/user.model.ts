import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreationAttrs{
    email:string,
    password:string
}

@Table({tableName:'users'})
export default class User extends Model<User, UserCreationAttrs>{
    
    @ApiProperty({example:1, description:'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example:'admin@gmail.com', description:'Почтовый адрес'})
    @Column({type: DataType.STRING, unique: true, allowNull:false })
    email: string;
    
    @ApiProperty({example:'123', description:'Пароль'})
    @Column({type: DataType.STRING, allowNull:false })
    password: string;
    
    @ApiProperty({example:true, description: 'Забанен ли пользователь'})
    @Column({type: DataType.BOOLEAN, defaultValue:false })
    banned: boolean;

    @ApiProperty({example:'ЦП', description:'Причина бана'})
    @Column({type: DataType.STRING, allowNull:true })
    banReason: string;

}