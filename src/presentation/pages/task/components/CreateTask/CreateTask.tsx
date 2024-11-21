import { useEffect, useState } from "react";
import Button from "../../../../components/Button";
import { Todo } from "../../../../../domain/entities/Todo";
import useTask from "../../hooks/use-task";

interface CreateTaskProps {
  setOpen: (open: boolean) => void;
  selectedTodo: Todo | null;
  useTask: ReturnType<typeof useTask>;
}

export default function CreateTask({
  setOpen,
  selectedTodo,
  useTask,
}: CreateTaskProps) {
  const [title, setTitle] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);

  const { createTask, updateTask } = useTask;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedTodo) {
      await updateTask(selectedTodo.id, { title, completed });
    } else {
      await createTask({
        title,
        completed,
      });
    }

    setOpen(false);
  };

  useEffect(() => {
    if (selectedTodo) {
      setTitle(selectedTodo.title);
      setCompleted(selectedTodo.completed);
    }
  }, [selectedTodo]);

  return (
    <div className="w-[600px] h-[600px] bg-white rounded-md p-10">
      <h1 className="text-2xl font-bold">Create Task</h1>

      <main className="flex flex-col gap-4 mt-10">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            id="title"
            placeholder="Title"
            className="w-full h-10 rounded-md border border-gray-300 p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="flex items-center gap-2">
            <label htmlFor="completed">Completed</label>
            <input
              type="checkbox"
              id="completed"
              placeholder="Completed"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
          </div>

          <Button
            className="border-none w-28 bg-blue-500 text-white h-10 rounded-md cursor-pointer"
            // disabled={loading}
          >
            Create
          </Button>
        </form>
      </main>
    </div>
  );
}
