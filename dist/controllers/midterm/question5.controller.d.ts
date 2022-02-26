import { TodosService } from 'server/providers/services/todos.service';
export declare class Question5Controller {
    private todosService;
    constructor(todosService: TodosService);
    index(): Promise<{
        todos: import("../../entities/todo.entity").Todo[];
    }>;
}
