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
exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const mongoose_2 = require("mongoose");
const options = {
    collection: 'users',
    timestamps: true,
};
let User = class User extends mongoose_2.Document {
};
exports.User = User;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'example@gmail.com',
        description: 'email',
        required: true,
    }),
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'exampleName1',
        description: 'nickname',
        required: true,
    }),
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], User.prototype, "nickname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'ExamplePassword1',
        description: 'password',
        required: true,
    }),
    (0, mongoose_1.Prop)({ required: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: 'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/7r5X/image/9djEiPBPMLu_IvCYyvRPwmZkM1g.jpg',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], User.prototype, "profileImage", void 0);
exports.User = User = __decorate([
    (0, mongoose_1.Schema)(options)
], User);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
exports.UserSchema.virtual('readOnlyData').get(function () {
    return {
        id: this.id,
        email: this.email,
        nickname: this.nickname,
        profileImage: this.profileImage,
    };
});
//# sourceMappingURL=user.schema.js.map