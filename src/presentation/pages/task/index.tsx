import { useEffect, useState } from "react";
import { HttpRequest } from "../../../domain/ports/wire/out/HttpRequest";
import Button from "../../components/Button";
import Card from "../../components/Card";
import List from "../../components/List";
import Modal from "../../components/Modal";
import CreateTask from "./components/CreateTask/CreateTask";
import useGetList from "./hooks/use-get-list";
import useDeleteTodo from "./hooks/use-delete-todo";
import useEditTodo from "./hooks/use-edit.todo";
import { Todo } from "../../../domain/entities/Todo";

export default function Home({ httpClient }: { httpClient: HttpRequest }) {
  const { todos, refetch } = useGetList({ httpClient });
  const [open, setOpen] = useState<boolean>(false);

  const { editTodo } = useEditTodo({ httpClient });
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const { deleteTodo } = useDeleteTodo({ httpClient });

  const renderList = () => {
    return todos.map((item) => (
      <h1
        key={item.id}
        className="flex items-center justify-between border border-gray-300 p-5"
      >
        {item.title} {item.completed ? "✅" : "❌"}
        <div className="flex gap-2">
          <Button
            className="border-none w-28 bg-red-500 text-white h-10 rounded-md cursor-pointer"
            onClick={() => deleteTodo(item.id)}
          >
            Delete
          </Button>

          <Button
            className="border-none w-28 bg-blue-500 text-white h-10 rounded-md cursor-pointer"
            onClick={() => {
              setSelectedTodo(item);
              setOpen(true);
            }}
          >
            Edit
          </Button>
        </div>
      </h1>
    ));
  };

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        <CreateTask
          httpClient={httpClient}
          setOpen={setOpen}
          refetch={refetch}
          selectedTodo={selectedTodo}
        />
      </Modal>
      <Card className="w-[600px] h-[600px] flex flex-col shadow-custom">
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Task List</h1>
          <div className="flex gap-2">
            <Button
              className="border-none w-28 bg-blue-500 text-white h-10 rounded-md cursor-pointer"
              onClick={() => setOpen(true)}
            >
              Create Task
            </Button>
            <Button
              className="border-none w-28 bg-blue-500 text-white h-10 rounded-md cursor-pointer"
              onClick={refetch}
            >
              Refresh
            </Button>
          </div>
        </header>
        <List className="flex-1 overflow-y-auto mt-10 ">{renderList()}</List>
      </Card>
    </>
  );
}
