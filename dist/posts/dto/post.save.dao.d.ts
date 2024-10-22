import { Post } from '../schemas/post.schema';
declare const PostSaveDao_base: import("@nestjs/common").Type<Pick<Post, "title" | "content" | "author" | "category" | "quote" | "authorId" | "postImage">>;
export declare class PostSaveDao extends PostSaveDao_base {
}
export {};
