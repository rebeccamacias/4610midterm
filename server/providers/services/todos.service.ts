import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'server/entities/todo.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  findAll() {
    return this.todosRepository.find();
  }

  findById(id: number): Promise<Todo> {
    return this.todosRepository.findOne(id);
  }

  createTodo(todo: Todo): Promise<Todo> {
    return this.todosRepository.save(todo);
  }

  updateTodo(todo: Todo): Promise<UpdateResult> {
    return this.todosRepository.update(todo.id, todo);
  }

}
