import { Model } from 'mongoose';
import { Comments } from '../schemas/comments.schema';
export declare class CommentsRepository {
    private commentsModel;
    constructor(commentsModel: Model<Comments>);
    getAllComments(): Promise<void>;
}
