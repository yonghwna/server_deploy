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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const post_schema_1 = require("../schemas/post.schema");
const comments_schema_1 = require("../../comments/schemas/comments.schema");
let PostsRepository = class PostsRepository {
    constructor(postModel, commentsModel) {
        this.postModel = postModel;
        this.commentsModel = commentsModel;
    }
    async getAllPosts() {
        const CommentsModel = mongoose_1.default.model('comments', comments_schema_1.CommentsSchema);
        const result = await this.postModel.find();
        return result;
    }
    async getPostById(postId) {
        return await this.postModel.findById(postId);
    }
    async createPost(post) {
        const createdPost = new this.postModel({
            ...post,
            postImage: post.postImage ? post.postImage : '',
        });
        createdPost.save();
        return createdPost;
    }
    async getPostByCategory(category) {
        return await this.postModel.find({ category });
    }
    async updatePost(post, id, fileName) {
        const existPost = await this.postModel.findById(id);
        existPost.title = post.title;
        existPost.content = post.content;
        existPost.quote = post.quote;
        existPost.postImage = fileName !== '' ? fileName : existPost.postImage;
        const updatedPost = await existPost.save();
        return updatedPost;
    }
    async deletePostById(user, postId) {
        await this.postModel.findByIdAndDelete(postId);
    }
};
exports.PostsRepository = PostsRepository;
exports.PostsRepository = PostsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(post_schema_1.Post.name)),
    __param(1, (0, mongoose_2.InjectModel)(comments_schema_1.Comments.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], PostsRepository);
//# sourceMappingURL=posts.repository.js.map