"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTodo1645577543426 = void 0;
const typeorm_1 = require("typeorm");
class AddTodo1645577543426 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'todo',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isGenerated: true,
                    isPrimary: true,
                },
                {
                    name: 'content',
                    type: 'text',
                },
                {
                    name: 'isComplete',
                    type: 'boolean',
                    default: 'FALSE',
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('todo');
    }
}
exports.AddTodo1645577543426 = AddTodo1645577543426;
//# sourceMappingURL=1645577543426-AddTodo.js.map