import { Todo } from "../../entities/Todo";

export interface ITodoRepository {
  createTodo(todo: Pick<Todo, "title" | "completed">): Promise<Todo>;
  deleteTodo(id: number): Promise<void>;
  updateTodo(
    id: number,
    todo: Pick<Todo, "title" | "completed">
  ): Promise<Todo>;
  getTodos(): Promise<Todo[]>;
}
