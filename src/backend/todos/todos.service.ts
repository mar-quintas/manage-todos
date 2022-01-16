import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @Inject('TODO_REPOSITORY')
    private todoRepository: Repository<Todo>,
  ) {}

  create(createTodoDto: CreateTodoDto){
    const todo = this.todoRepository.create({
      title: createTodoDto.title,
      checked: createTodoDto.checked,
      })
      console.log(todo)
    return 'This action adds a new todo';
  }

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;

//     await repository.update(1, { firstName: "Rizzrak" });
// executes UPDATE user SET firstName = Rizzrak WHERE id = 1
  }

  async remove(id: number) {
        // await repository.delete(1);
    return `This action removes a #${id} todo`;

  }
}
