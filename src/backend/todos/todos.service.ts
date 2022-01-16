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
      this.todoRepository.save(todo)
    return "hello";
  }

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    this.todoRepository.update(id, { title: updateTodoDto.title, checked: updateTodoDto.checked });
    return "hello";
  }

  remove(id: number) {
    this.todoRepository.delete(id);
    return "hello";
  }
}
