import { Model } from "sequelize-typescript";
interface UserCreationAttrs {
    email: string;
    password: string;
}
export default class User extends Model<User, UserCreationAttrs> {
    id: number;
    email: string;
    password: string;
    banned: boolean;
    banReason: string;
}
export {};
