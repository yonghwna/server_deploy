import { Strategy } from 'passport-jwt';
import { Payload } from './jwt.payload';
import { UsersRepository } from 'src/users/repository/users.repository';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userRepository;
    constructor(userRepository: UsersRepository);
    validate(payload: Payload): Promise<import("../../users/schemas/user.schema").User>;
}
export {};
