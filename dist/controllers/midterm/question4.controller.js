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
exports.Question4Controller = void 0;
const common_1 = require("@nestjs/common");
const jwt_body_decorator_1 = require("../../decorators/jwt_body.decorator");
const skip_decorator_1 = require("../../decorators/skip.decorator");
const jwt_body_dto_1 = require("../../dto/jwt_body.dto");
const auth_guard_1 = require("../../providers/guards/auth.guard");
const users_service_1 = require("../../providers/services/users.service");
let Question4Controller = class Question4Controller {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getUsers(jwtBody) {
        const users = await this.usersService.findAll();
        return { users };
    }
};
__decorate([
    (0, common_1.Get)('/users'),
    __param(0, (0, jwt_body_decorator_1.JwtBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Question4Controller.prototype, "getUsers", null);
Question4Controller = __decorate([
    (0, common_1.Controller)(),
    (0, skip_decorator_1.Skip)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], Question4Controller);
exports.Question4Controller = Question4Controller;
//# sourceMappingURL=question4.controller.js.map