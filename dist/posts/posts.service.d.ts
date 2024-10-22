import { PostsRepository } from './repository/posts.repository';
import { User } from 'src/users/schemas/user.schema';
import { PostRequestDto } from './dto/post.request.dto';
import { AwsService } from './aws.service';
export declare class PostsService {
    private readonly postRepository;
    private readonly awsService;
    constructor(postRepository: PostsRepository, awsService: AwsService);
    getAllPosts(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/post.schema").Post> & import("./schemas/post.schema").Post & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    getPostById(postId: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/post.schema").Post> & import("./schemas/post.schema").Post & Required<{
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
    deletePostById(user: User, postId: string): Promise<void>;
}
