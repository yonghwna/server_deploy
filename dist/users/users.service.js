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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const users_repository_1 = require("./repository/users.repository");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getAllUser() {
        const allUser = await this.userRepository.getAllUser();
        const readOnlyData = allUser.map((user) => user.readOnlyData);
        return readOnlyData;
    }
    async signUp(body) {
        const { email, password } = body;
        const isUserExist = await this.userRepository.existsByEmail(email);
        if (isUserExist) {
            throw new common_1.UnauthorizedException('이미 가입된 이메일입니다');
        }
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltOrRounds);
        const createdUser = await this.userRepository.createUser({
            ...body,
            password: hashedPassword,
        });
        return createdUser.readOnlyData;
    }
    async getUserById(userId) {
        const user = await this.userRepository.findById(userId);
        if (!user) {
            throw new common_1.HttpException('유저가 존재하지 않습니다', 404);
        }
        return user.readOnlyData;
    }
    async updateUserById(user, body) {
        console.log({ user: user.id, body });
        const { nickname } = body;
        const newUser = await this.userRepository.findByIdAndUpdateNickname(user.id, nickname);
        return newUser;
    }
    async uploadImage(user, image) {
        const fileName = `users/${image.filename}`;
        const newUser = await this.userRepository.findByIdAndUpdateImg(user.id, fileName);
        return newUser;
    }
    async deleteUserById(user) {
        const deletedUser = await this.userRepository.deleteUserById(user.id);
        if (!deletedUser) {
            throw new common_1.HttpException('유저가 존재하지 않습니다', 404);
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository])
], UsersService);
//# sourceMappingURL=users.service.js.map