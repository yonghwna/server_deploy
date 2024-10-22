import { UsersService } from './users.service';
import { UserRequestDto } from './dto/users.request.dto';
import { AuthService } from 'src/auth/auth.service';
import { LoginRequestDto } from 'src/auth/dto/login.request.dto';
import { User } from './schemas/user.schema';
export declare class UsersController {
    private readonly usersService;
    private readonly authService;
    constructor(usersService: UsersService, authService: AuthService);
    getCurrentUser(user: any): any;
    getUserById(id: string): Promise<{
        id: string;
        email: string;
        nickname: string;
        profileImage: string;
    }>;
    updateUserById(user: any, body: any): Promise<{
        id: string;
        email: string;
        nickname: string;
        profileImage: string;
    }>;
    signUp(body: UserRequestDto): Promise<{
        id: string;
        email: string;
        nickname: string;
        profileImage: string;
    }>;
    logIn(data: LoginRequestDto): Promise<{
        access_token: string;
    }>;
    uploadUsers(image: Express.Multer.File, user: User): Promise<{
        id: string;
        email: string;
        nickname: string;
        profileImage: string;
    }>;
    deleteUserById(user: any): void;
}
