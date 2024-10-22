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
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const posts_service_1 = require("./posts.service");
const auth_service_1 = require("../auth/auth.service");
const swagger_1 = require("@nestjs/swagger");
const jwt_guard_1 = require("../auth/jwt/jwt.guard");
const user_decorator_1 = require("../common/decorators/user.decorator");
const user_schema_1 = require("../users/schemas/user.schema");
const post_request_dto_1 = require("./dto/post.request.dto");
const success_interceptor_1 = require("../common/interceptors/success.interceptor");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let PostsController = class PostsController {
    constructor(postsService, authService) {
        this.postsService = postsService;
        this.authService = authService;
    }
    getAllPosts() {
        return this.postsService.getAllPosts();
    }
    getPostById(id) {
        return this.postsService.getPostById(id);
    }
    getPostByCategory(category) {
        return this.postsService.getPostByCategory(category);
    }
    async createPost(data, user, image) {
        return this.postsService.createPost(data, user, image);
    }
    async updatePost(id, data, user, image) {
        console.log({ id, data, user, image });
        return this.postsService.updatePost(id, data, user, image);
    }
    deleteUserById(user, id) {
        this.postsService.deletePostById(user, id);
    }
};
exports.PostsController = PostsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '모든 포스트 가져오기' }),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "getAllPosts", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'id로 포스트 가져오기' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "getPostById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '특정 카테고리 포스트 가져오기' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Get)('quote/:category'),
    __param(0, (0, common_1.Param)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "getPostByCategory", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '포스트 생성하기' }),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', { storage: (0, multer_1.memoryStorage)() })),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.CurrentUser)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_request_dto_1.PostRequestDto,
        user_schema_1.User, Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "createPost", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '포스트 수정하기' }),
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', { storage: (0, multer_1.memoryStorage)() })),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.CurrentUser)()),
    __param(3, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, post_request_dto_1.PostRequestDto,
        user_schema_1.User, Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "updatePost", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'id로 게시글 삭제' }),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_schema_1.User, String]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "deleteUserById", null);
exports.PostsController = PostsController = __decorate([
    (0, common_1.Controller)('posts'),
    (0, common_1.UseInterceptors)(success_interceptor_1.SuccessInterceptor),
    __metadata("design:paramtypes", [posts_service_1.PostsService,
        auth_service_1.AuthService])
], PostsController);
//# sourceMappingURL=posts.controller.js.map