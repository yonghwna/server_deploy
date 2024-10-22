import { User } from '../schemas/user.schema';
declare const ReadOnlyUserDto_base: import("@nestjs/common").Type<Pick<User, "email" | "nickname">>;
export declare class ReadOnlyUserDto extends ReadOnlyUserDto_base {
    id: string;
}
export {};
