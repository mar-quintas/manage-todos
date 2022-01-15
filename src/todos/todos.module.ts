import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { DatabaseModule } from '../database/database.module';
import { todoProviders } from './todos.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [TodosController],
  providers: [
    ...todoProviders,
    TodosService,]
})
export class TodosModule {}
