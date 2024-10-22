import { PostsService } from './posts.service';
import { AuthService } from 'src/auth/auth.service';
import { User } from 'src/users/schemas/user.schema';
import { PostRequestDto } from './dto/post.request.dto';
export declare class PostsController {
    private readonly postsService;
    private readonly authService;
    constructor(postsService: PostsService, authService: AuthService);
    getAllPosts(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/post.schema").Post> & import("./schemas/post.schema").Post & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    getPostById(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/post.schema").Post> & import("./schemas/post.schema").Post & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    getPostByCategory(category: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/post.schema").Post> & import("./schemas/post.schema").Post & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    createPost(data: PostRequestDto, user: User, image: Express.Multer.File | undefined): Promise<import("./schemas/post.schema").Post>;
    updatePost(id: string, data: PostRequestDto, user: User, image: Express.Multer.File | undefined): Promise<import("mongoose").Document<unknown, {}, import("./schemas/post.schema").Post> & import("./schemas/post.schema").Post & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    deleteUserById(user: User, id: string): void;
}
