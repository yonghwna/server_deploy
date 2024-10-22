"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsModule = void 0;
const common_1 = require("@nestjs/common");
const posts_controller_1 = require("./posts.controller");
const posts_service_1 = require("./posts.service");
const auth_module_1 = require("../auth/auth.module");
const mongoose_1 = require("@nestjs/mongoose");
const post_schema_1 = require("./schemas/post.schema");
const posts_repository_1 = require("./repository/posts.repository");
const platform_express_1 = require("@nestjs/platform-express");
const comments_schema_1 = require("../comments/schemas/comments.schema");
const comments_module_1 = require("../comments/comments.module");
const aws_service_1 = require("./aws.service");
const config_1 = require("@nestjs/config");
let PostsModule = class PostsModule {
};
exports.PostsModule = PostsModule;
exports.PostsModule = PostsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            platform_express_1.MulterModule.register({
                dest: './upload',
            }),
            config_1.ConfigModule,
            auth_module_1.AuthModule,
            comments_module_1.CommentsModule,
            (0, common_1.forwardRef)(() => comments_module_1.CommentsModule),
            mongoose_1.MongooseModule.forFeature([
                { name: post_schema_1.Post.name, schema: post_schema_1.PostSchema },
                {
                    name: comments_schema_1.Comments.name,
                    schema: comments_schema_1.CommentsSchema,
                },
            ]),
        ],
        controllers: [posts_controller_1.PostsController],
        providers: [posts_service_1.PostsService, posts_repository_1.PostsRepository, aws_service_1.AwsService],
        exports: [posts_service_1.PostsService, posts_repository_1.PostsRepository],
    })
], PostsModule);
//# sourceMappingURL=posts.module.js.map