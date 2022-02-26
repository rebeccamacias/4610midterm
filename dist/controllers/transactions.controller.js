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
exports.TransactionsController = void 0;
const common_1 = require("@nestjs/common");
const skip_decorator_1 = require("../decorators/skip.decorator");
const auth_guard_1 = require("../providers/guards/auth.guard");
let TransactionsController = class TransactionsController {
    index() {
        const transactions = [
            {
                id: 1,
                amount: 101.34,
                fromUser: {
                    id: 1,
                    name: 'Abby Zollinger',
                },
                toUser: {
                    id: 2,
                    name: 'Bruce Young',
                },
            },
            {
                id: 2,
                amount: 99.88,
                fromUser: {
                    id: 1,
                    name: 'Abby Zollinger',
                },
                toUser: {
                    id: 3,
                    name: 'Charles Xavier',
                },
            },
            {
                id: 3,
                amount: 42.19,
                fromUser: {
                    id: 2,
                    name: 'Bruce Young',
                },
                toUser: {
                    id: 1,
                    name: 'Abby Zollinger',
                },
            },
        ];
        return { transactions };
    }
};
__decorate([
    (0, common_1.Get)('/transactions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransactionsController.prototype, "index", null);
TransactionsController = __decorate([
    (0, common_1.Controller)(),
    (0, skip_decorator_1.Skip)(auth_guard_1.AuthGuard)
], TransactionsController);
exports.TransactionsController = TransactionsController;
//# sourceMappingURL=transactions.controller.js.map