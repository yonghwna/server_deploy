"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsModule = void 0;
const common_1 = require("@nestjs/common");
const comments_controller_1 = require("./comments.controller");
const comments_service_1 = require("./comments.service");
const mongoose_1 = require("@nestjs/mongoose");
const comments_schema_1 = require("./schemas/comments.schema");
const comments_repository_1 = require("./repository/comments.repository");
const users_module_1 = require("../users/users.module");
const posts_module_1 = require("../posts/posts.module");
let CommentsModule = class CommentsModule {
};
exports.CommentsModule = CommentsModule;
exports.CommentsModule = CommentsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: comments_schema_1.Comments.name, schema: comments_schema_1.CommentsSchema },
            ]),
            users_module_1.UsersModule,
            (0, common_1.forwardRef)(() => posts_module_1.PostsModule),
        ],
        controllers: [comments_controller_1.CommentsController],
        providers: [comments_service_1.CommentsService, comments_repository_1.CommentsRepository],
        exports: [comments_service_1.CommentsService, comments_repository_1.CommentsRepository],
    })
], CommentsModule);
//# sourceMappingURL=comments.module.js.map