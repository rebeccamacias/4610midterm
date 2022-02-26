import { Todo } from 'server/entities/todo.entity';
import { Repository } from 'typeorm';
export declare class TodosService {
    private todosRepository;
    constructor(todosRepository: Repository<Todo>);
    findAll(): Promise<Todo[]>;
}
