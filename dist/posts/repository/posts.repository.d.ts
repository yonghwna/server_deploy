import mongoose, { Model, Types } from 'mongoose';
import { Post } from '../schemas/post.schema';
import { PostSaveDao } from '../dto/post.save.dao';
import { Comments } from 'src/comments/schemas/comments.schema';
import { User } from 'src/users/schemas/user.schema';
import { PostRequestDto } from '../dto/post.request.dto';
export declare class PostsRepository {
    private postModel;
    private commentsModel;
    constructor(postModel: Model<Post>, commentsModel: Model<Comments>);
    getAllPosts(): Promise<(mongoose.Document<unknown, {}, Post> & Post & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    getPostById(postId: string | Types.ObjectId): Promise<mongoose.Document<unknown, {}, Post> & Post & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    createPost(post: PostSaveDao): Promise<Post>;
    getPostByCategory(category: string): Promise<(mongoose.Document<unknown, {}, Post> & Post & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    updatePost(post: Omit<PostRequestDto, 'category' | 'postImage'>, id: string, fileName: string): Promise<mongoose.Document<unknown, {}, Post> & Post & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    deletePostById(user: User, postId: string): Promise<void>;
}
