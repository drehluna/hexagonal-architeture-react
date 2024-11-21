import { useCallback, useEffect, useState } from "react";
import { Todo } from "../../../../domain/entities/Todo";
import { ITodoRepository } from "../../../../domain/repositories/interfaces/ITodoRepositorie";

export default function useTask({
  todoRepository,
}: {
  todoRepository: ITodoRepository;
}) {
  const [todos, setTodos] = useState<Todo[]>([]);

  async function getTodos() {
    const tasks = await todoRepository.getTodos();
    setTodos(tasks);
    return tasks;
  }

  async function createTodo(todo: Pick<Todo, "title" | "completed">) {
    await todoRepository.createTodo(todo);
    refetch();
  }

  async function deleteTodo(id: number) {
    await todoRepository.deleteTodo(id);
    refetch();
  }

  async function updateTodo(
    id: number,
    todo: Pick<Todo, "title" | "completed">
  ) {
    await todoRepository.updateTodo(id, todo);
    refetch();
  }

  const refetch = useCallback(() => {
    getTodos();
  }, [todoRepository, getTodos]);

  useEffect(() => {
    getTodos();
  }, []);

  return {
    createTodo,
    deleteTodo,
    updateTodo,
    refetch,
    todos,
  };
}
