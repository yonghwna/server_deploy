import { Post } from '../schemas/post.schema';
declare const PostRequestDto_base: import("@nestjs/common").Type<Pick<Post, "title" | "content" | "category" | "quote">>;
export declare class PostRequestDto extends PostRequestDto_base {
}
export {};
