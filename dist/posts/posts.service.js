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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const posts_repository_1 = require("./repository/posts.repository");
const aws_service_1 = require("./aws.service");
let PostsService = class PostsService {
    constructor(postRepository, awsService) {
        this.postRepository = postRepository;
        this.awsService = awsService;
    }
    async getAllPosts() {
        const allPosts = await this.postRepository.getAllPosts();
        return allPosts;
    }
    async getPostById(postId) {
        const post = await this.postRepository.getPostById(postId);
        return post;
    }
    async getPostByCategory(category) {
        const posts = await this.postRepository.getPostByCategory(category);
        return posts;
    }
    async createPost(data, user, image) {
        let imageKey = '';
        if (image != undefined) {
            const saveImage = await this.awsService.uploadFileToS3('posts', image);
            const fileName = this.awsService.getAwsS3FileUrl(saveImage.key);
            imageKey = fileName;
        }
        const newPost = {
            ...data,
            postImage: imageKey,
            author: user.nickname,
            authorId: user.id,
        };
        const post = await this.postRepository.createPost(newPost);
        return post;
    }
    async updatePost(id, data, user, image) {
        let imageKey = '';
        if (image != undefined) {
            const saveImage = await this.awsService.uploadFileToS3('posts', image);
            const fileName = this.awsService.getAwsS3FileUrl(saveImage.key);
            imageKey = fileName;
            const newPost = {
                title: data.title,
                content: data.content,
                quote: data.quote,
            };
            const post = await this.postRepository.updatePost(newPost, id, imageKey);
            return post;
        }
        else {
            console.log(`이거 실행됨`);
            const newPost = {
                title: data.title,
                content: data.content,
                quote: data.quote,
            };
            const post = await this.postRepository.updatePost(newPost, id, '');
            return post;
        }
    }
    async deletePostById(user, postId) {
        await this.postRepository.deletePostById(user, postId);
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [posts_repository_1.PostsRepository,
        aws_service_1.AwsService])
], PostsService);
//# sourceMappingURL=posts.service.js.map