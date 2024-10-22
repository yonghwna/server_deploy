import { UserRequestDto } from './dto/users.request.dto';
import { UsersRepository } from './repository/users.repository';
import { User } from './schemas/user.schema';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: UsersRepository);
    getAllUser(): Promise<{
        id: string;
        email: string;
        nickname: string;
        profileImage: string;
    }[]>;
    signUp(body: UserRequestDto): Promise<{
        id: string;
        email: string;
        nickname: string;
        profileImage: string;
    }>;
    getUserById(userId: string): Promise<{
        id: string;
        email: string;
        nickname: string;
        profileImage: string;
    }>;
    updateUserById(user: User, body: {
        nickname: string;
    }): Promise<{
        id: string;
        email: string;
        nickname: string;
        profileImage: string;
    }>;
    uploadImage(user: User, image: Express.Multer.File): Promise<{
        id: string;
        email: string;
        nickname: string;
        profileImage: string;
    }>;
    deleteUserById(user: User): Promise<void>;
}
