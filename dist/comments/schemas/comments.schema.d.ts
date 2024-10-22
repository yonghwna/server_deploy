import { Document, Types } from 'mongoose';
export declare class Comments extends Document {
    author: Types.ObjectId;
    contents: string;
    likeCount: number;
    info: Types.ObjectId;
}
export declare const CommentsSchema: import("mongoose").Schema<Comments, import("mongoose").Model<Comments, any, any, any, Document<unknown, any, Comments> & Comments & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Comments, Document<unknown, {}, import("mongoose").FlatRecord<Comments>> & import("mongoose").FlatRecord<Comments> & Required<{
    _id: unknown;
}> & {
    __v?: number;
}>;
