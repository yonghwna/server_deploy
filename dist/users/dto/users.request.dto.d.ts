import { User } from '../schemas/user.schema';
declare const UserRequestDto_base: import("@nestjs/common").Type<Pick<User, "email" | "nickname" | "password">>;
export declare class UserRequestDto extends UserRequestDto_base {
}
export {};
