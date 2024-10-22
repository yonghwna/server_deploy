"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const post_schema_1 = require("../schemas/post.schema");
class PostRequestDto extends (0, swagger_1.PickType)(post_schema_1.Post, [
    'category',
    'title',
    'content',
    'quote',
]) {
}
exports.PostRequestDto = PostRequestDto;
//# sourceMappingURL=post.request.dto.js.map