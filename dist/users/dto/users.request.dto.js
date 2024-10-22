"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_schema_1 = require("../schemas/user.schema");
class UserRequestDto extends (0, swagger_1.PickType)(user_schema_1.User, [
    'email',
    'nickname',
    'password',
]) {
}
exports.UserRequestDto = UserRequestDto;
//# sourceMappingURL=users.request.dto.js.map