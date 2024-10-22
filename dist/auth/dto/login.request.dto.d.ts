import { User } from 'src/users/schemas/user.schema';
declare const LoginRequestDto_base: import("@nestjs/common").Type<Pick<User, "email" | "password">>;
export declare class LoginRequestDto extends LoginRequestDto_base {
}
export {};
