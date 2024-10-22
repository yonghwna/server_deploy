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
exports.PostSchema = exports._PostSchema = exports.Post = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mongoose_2 = require("mongoose");
const options = {
    timestamps: true,
};
let Post = class Post extends mongoose_2.Document {
};
exports.Post = Post;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '책',
        description: 'category',
        required: true,
    }),
    (0, mongoose_1.Prop)({ required: true, default: '전체' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Post.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '해리포터',
        description: 'title',
        required: true,
    }),
    (0, mongoose_1.Prop)({ required: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '너무 재미있었어요',
        description: 'content',
        required: true,
    }),
    (0, mongoose_1.Prop)({ required: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Post.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '지금도 재미있을까?',
        description: 'quote',
        required: true,
    }),
    (0, mongoose_1.Prop)({ required: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Post.prototype, "quote", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'exampleName1',
        description: 'author',
        required: true,
    }),
    (0, mongoose_1.Prop)({ required: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Post.prototype, "author", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'asdfq23saf21asdfa4',
        description: 'author',
        required: true,
    }),
    (0, mongoose_1.Prop)({ required: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Post.prototype, "authorId", void 0);
__decorate([
    (0, mongoose_1.Prop)({}),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Post.prototype, "postImage", void 0);
exports.Post = Post = __decorate([
    (0, mongoose_1.Schema)(options)
], Post);
exports._PostSchema = mongoose_1.SchemaFactory.createForClass(Post);
exports._PostSchema.virtual('comments', {
    ref: 'comments',
    localField: '_id',
    foreignField: 'info',
});
exports._PostSchema.set('toObject', { virtuals: true });
exports._PostSchema.set('toJSON', { virtuals: true });
exports.PostSchema = exports._PostSchema;
//# sourceMappingURL=post.schema.js.map