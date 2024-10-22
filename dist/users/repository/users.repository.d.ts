import { User } from '../schemas/user.schema';
import { Model, Types } from 'mongoose';
import { UserRequestDto } from '../dto/users.request.dto';
export declare class UsersRepository {
    private userModel;
    constructor(userModel: Model<User>);
    getAllUser(): Promise<(import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    findByIdAndUpdateImg(id: string, fileName: string): Promise<{
        id: string;
        email: string;
        nickname: string;
        profileImage: string;
    }>;
    existsByEmail(email: string): Promise<boolean>;
    createUser(user: UserRequestDto): Promise<User>;
    findById(userId: string): Promise<User | null>;
    findUserByEmail(email: string): Promise<User | null>;
    findByIdAndUpdateNickname(userId: string, nickname: string): Promise<{
        id: string;
        email: string;
        nickname: string;
        profileImage: string;
    }>;
    findUserByIdWithoutPassword(userId: string | Types.ObjectId): Promise<User | null>;
    deleteUserById(userId: string): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
}
