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
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
const user_schema_1 = require("../schemas/user.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let UsersRepository = class UsersRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async getAllUser() {
        return await this.userModel.find();
    }
    async findByIdAndUpdateImg(id, fileName) {
        const user = await this.userModel.findById(id);
        user.profileImage = `http://localhost:8000/media/${fileName}`;
        const newUser = await user.save();
        return newUser.readOnlyData;
    }
    async existsByEmail(email) {
        const result = await this.userModel.exists({ email });
        return result ? true : false;
    }
    async createUser(user) {
        const createdUser = new this.userModel(user);
        createdUser.save();
        return createdUser;
    }
    async findById(userId) {
        const user = await this.userModel.findById(userId);
        return user;
    }
    async findUserByEmail(email) {
        const user = await this.userModel.findOne({ email });
        return user;
    }
    async findByIdAndUpdateNickname(userId, nickname) {
        const user = await this.userModel.findById(userId);
        user.nickname = nickname;
        const newUser = await user.save();
        return newUser.readOnlyData;
    }
    async findUserByIdWithoutPassword(userId) {
        const user = await this.userModel.findById(userId).select('-password');
        return user;
    }
    async deleteUserById(userId) {
        return await this.userModel.findByIdAndDelete(userId);
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UsersRepository);
//# sourceMappingURL=users.repository.js.map