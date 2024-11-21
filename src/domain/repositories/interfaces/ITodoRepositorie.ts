import { Todo } from "../../entities/Todo";

export interface ITodoRepository {
  createTask(todo: Pick<Todo, "title" | "completed">): Promise<Todo>;
  deleteTask(id: number): Promise<void>;
  updateTask(
    id: number,
    todo: Pick<Todo, "title" | "completed">
  ): Promise<Todo>;
  getTasks(): Promise<Todo[]>;
}
