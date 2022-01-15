import { createConnection } from 'typeorm';
import { Todo } from '../todos/entities/todo.entity'
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'sqlite',
      database: './database/todos.db',
      entities: [
        Todo,
      ],
      synchronize: true,
    }),
  },
];
