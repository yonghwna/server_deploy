import { User } from 'src/users/schemas/user.schema';
import { CommentsCreateDto } from './dto/comments.create.dto';
import { Comments } from './schemas/comments.schema';
import { Model } from 'mongoose';
import { PostsRepository } from 'src/posts/repository/posts.repository';
export declare class CommentsService {
    private commentsModel;
    private readonly postsRepository;
    constructor(commentsModel: Model<Comments>, postsRepository: PostsRepository);
    getAllComments(): Promise<(import("mongoose").Document<unknown, {}, Comments> & Comments & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    createComment(user: User, id: string, comments: CommentsCreateDto): Promise<import("mongoose").Document<unknown, {}, Comments> & Comments & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    plusLike(id: string): Promise<void>;
}
