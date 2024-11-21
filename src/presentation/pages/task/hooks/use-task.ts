import { useCallback, useEffect, useState } from "react";
import { Todo } from "../../../../domain/entities/Todo";
import { ITodoRepository } from "../../../../domain/repositories/interfaces/ITodoRepositorie";

export default function useTask({
  todoRepository,
}: {
  todoRepository: ITodoRepository;
}) {
  const [todos, setTodos] = useState<Todo[]>([]);

  async function getTasks() {
    const tasks = await todoRepository.getTasks();
    setTodos(tasks);
    return tasks;
  }

  async function createTask(todo: Pick<Todo, "title" | "completed">) {
    await todoRepository.createTask(todo);
    refetch();
  }

  async function deleteTask(id: number) {
    await todoRepository.deleteTask(id);
    refetch();
  }

  async function updateTask(
    id: number,
    todo: Pick<Todo, "title" | "completed">
  ) {
    await todoRepository.updateTask(id, todo);
    refetch();
  }

  const refetch = useCallback(() => {
    getTasks();
  }, [todoRepository, getTasks]);

  useEffect(() => {
    getTasks();
  }, []);

  return {
    createTask,
    deleteTask,
    updateTask,
    refetch,
    todos,
  };
}
