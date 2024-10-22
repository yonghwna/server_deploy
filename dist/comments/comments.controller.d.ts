import { CommentsService } from './comments.service';
import { CommentsCreateDto } from './dto/comments.create.dto';
import { User } from 'src/users/schemas/user.schema';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    getAllComments(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/comments.schema").Comments> & import("./schemas/comments.schema").Comments & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    createComment(id: string, comments: CommentsCreateDto, user: User): Promise<import("mongoose").Document<unknown, {}, import("./schemas/comments.schema").Comments> & import("./schemas/comments.schema").Comments & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    plusLike(id: string): Promise<void>;
}
