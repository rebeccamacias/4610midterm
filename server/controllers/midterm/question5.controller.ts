import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { JwtBody } from 'server/decorators/jwt_body.decorator';
import { Skip } from 'server/decorators/skip.decorator';
import { JwtBodyDto } from 'server/dto/jwt_body.dto';
import { Todo } from 'server/entities/todo.entity';
import { AuthGuard } from 'server/providers/guards/auth.guard';
import { TodosService } from 'server/providers/services/todos.service';

class TodoPostBody {
  content: string;
}

class TodoPostBodyWithId {
  id: number;
}

@Controller()
@Skip(AuthGuard)
export class Question5Controller {
  constructor(private todosService: TodosService) {}

  @Get('/todos')
  public async index() {
    const todos = await this.todosService.findAll();
    return { todos };
  }

  @Post('/todos')
  public async create(@JwtBody() jwtBody: JwtBodyDto, @Body() body: TodoPostBody) {
    let todo = new Todo();
    todo.content = body.content;
    todo.isComplete = false;
    todo = await this.todosService.createTodo(todo);
    return { todo }; 
  }

  @Put('/todos/:id')
  public async update(@JwtBody() jwtBody: JwtBodyDto, @Body() body: TodoPostBodyWithId) {
    let todo = await this.todosService.findById(body.id);
    todo.isComplete = !todo.isComplete;
    return await this.todosService.updateTodo(todo);
  }
}
