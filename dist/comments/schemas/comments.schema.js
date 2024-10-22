"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsSchema = exports.Comments = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mongoose_2 = require("mongoose");
const options = {
    timestamps: true,
    collection: 'comments',
};
let Comments = class Comments extends mongoose_2.Document {
};
exports.Comments = Comments;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '작성자 id',
        required: true,
    }),
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, required: true, ref: 'users' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Comments.prototype, "author", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '댓글 본문',
        required: true,
    }),
    (0, mongoose_1.Prop)({ required: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Comments.prototype, "contents", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '좋아요',
    }),
    (0, mongoose_1.Prop)({ default: 0 }),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], Comments.prototype, "likeCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '작성대상 (게시글,정보글)',
        required: true,
    }),
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, required: true, ref: 'posts' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Comments.prototype, "info", void 0);
exports.Comments = Comments = __decorate([
    (0, mongoose_1.Schema)(options)
], Comments);
exports.CommentsSchema = mongoose_1.SchemaFactory.createForClass(Comments);
//# sourceMappingURL=comments.schema.js.map