import { HttpRequest } from "../../../domain/ports/wire/out/HttpRequest";
import Button from "../../components/Button";
import Card from "../../components/Card";
import List from "../../components/List";
import useGetList from "./hooks/use-get-list";

export default function Home({ httpClient }: { httpClient: HttpRequest }) {
  const { todos } = useGetList({ httpClient });

  const renderList = () => {
    return todos.map((item) => <h1 key={item.id}>{item.title}</h1>);
  };

  return (
    <Card className="w-[600px] h-[600px] flex flex-col shadow-custom">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Task List</h1>
        <Button className="border-none w-28 bg-blue-500 text-white h-10 rounded-md cursor-pointer">
          Create Task
        </Button>
      </header>
      <List className="flex-1 overflow-y-auto">{renderList()}</List>
    </Card>
  );
}
