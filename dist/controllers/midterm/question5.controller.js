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
exports.Question5Controller = void 0;
const common_1 = require("@nestjs/common");
const skip_decorator_1 = require("../../decorators/skip.decorator");
const auth_guard_1 = require("../../providers/guards/auth.guard");
const todos_service_1 = require("../../providers/services/todos.service");
let Question5Controller = class Question5Controller {
    constructor(todosService) {
        this.todosService = todosService;
    }
    async index() {
        const todos = await this.todosService.findAll();
        return { todos };
    }
};
__decorate([
    (0, common_1.Get)('/todos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Question5Controller.prototype, "index", null);
Question5Controller = __decorate([
    (0, common_1.Controller)(),
    (0, skip_decorator_1.Skip)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [todos_service_1.TodosService])
], Question5Controller);
exports.Question5Controller = Question5Controller;
//# sourceMappingURL=question5.controller.js.map