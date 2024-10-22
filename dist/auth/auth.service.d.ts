import { UsersRepository } from 'src/users/repository/users.repository';
import { LoginRequestDto } from './dto/login.request.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userRepository;
    private jwtService;
    constructor(userRepository: UsersRepository, jwtService: JwtService);
    signIn(data: LoginRequestDto): Promise<{
        access_token: string;
    }>;
}
