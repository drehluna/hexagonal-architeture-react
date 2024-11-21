import { useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import List from "../../components/List";

import { Todo } from "../../../domain/entities/Todo";
import useTask from "./hooks/use-task";
import { ITodoRepository } from "../../../domain/repositories/interfaces/ITodoRepositorie";
import { TodoList } from "./components/render-todo-list";
import Modal from "../../components/Modal";
import CreateTask from "./components/CreateTask/CreateTask";

export default function Home({
  todoRepositorieFactory,
}: {
  todoRepositorieFactory: () => ITodoRepository;
}) {
  const useTaskInstance = useTask({
    todoRepository: todoRepositorieFactory(),
  });

  const { deleteTask, todos, refetch } = useTaskInstance;

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const renderList = todos.map((item: Todo) => (
    <TodoList.root key={item.id}>
      <TodoList.title>{item.title}</TodoList.title>
      <div className="flex gap-2">
        <Button
          className="border-none w-28 bg-red-500 text-white h-10 rounded-md cursor-pointer"
          onClick={() => deleteTask(item.id)}
        >
          Delete
        </Button>
        <Button className="border-none w-28 bg-blue-500 text-white h-10 rounded-md cursor-pointer">
          Edit
        </Button>
      </div>
    </TodoList.root>
  ));

  return (
    <>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <CreateTask
          setOpen={setModalOpen}
          selectedTodo={null}
          useTask={useTaskInstance}
        />
      </Modal>
      <Card className="w-[600px] h-[600px] flex flex-col shadow-custom">
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Task List</h1>
          <div className="flex gap-2">
            <Button
              className="border-none w-28 bg-blue-500 text-white h-10 rounded-md cursor-pointer"
              onClick={() => setModalOpen(true)}
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
        <List className="flex-1 overflow-y-auto mt-10 ">{renderList}</List>
      </Card>
    </>
  );
}
