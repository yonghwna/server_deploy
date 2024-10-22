"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSaveDao = void 0;
const swagger_1 = require("@nestjs/swagger");
const post_schema_1 = require("../schemas/post.schema");
class PostSaveDao extends (0, swagger_1.PickType)(post_schema_1.Post, [
    'category',
    'title',
    'content',
    'quote',
    'author',
    'authorId',
    'postImage',
]) {
}
exports.PostSaveDao = PostSaveDao;
//# sourceMappingURL=post.save.dao.js.map