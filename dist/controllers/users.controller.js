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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const jwt_body_decorator_1 = require("../decorators/jwt_body.decorator");
const roles_decorator_1 = require("../decorators/roles.decorator");
const skip_decorator_1 = require("../decorators/skip.decorator");
const create_user_dto_1 = require("../dto/create_user.dto");
const jwt_body_dto_1 = require("../dto/jwt_body.dto");
const refresh_token_entity_1 = require("../entities/refresh_token.entity");
const role_entity_1 = require("../entities/role.entity");
const user_entity_1 = require("../entities/user.entity");
const user_role_entity_1 = require("../entities/user_role.entity");
const auth_guard_1 = require("../providers/guards/auth.guard");
const jwt_service_1 = require("../providers/services/jwt.service");
const refresh_tokens_service_1 = require("../providers/services/refresh_tokens.service");
const roles_service_1 = require("../providers/services/roles.service");
const users_service_1 = require("../providers/services/users.service");
let UsersController = class UsersController {
    constructor(usersService, rolesService, jwtService, refreshTokenService) {
        this.usersService = usersService;
        this.rolesService = rolesService;
        this.jwtService = jwtService;
        this.refreshTokenService = refreshTokenService;
    }
};
UsersController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        roles_service_1.RolesService,
        jwt_service_1.JwtService,
        refresh_tokens_service_1.RefreshTokensService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map