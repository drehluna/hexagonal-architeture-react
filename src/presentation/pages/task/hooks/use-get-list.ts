import { useEffect, useState } from "react";
import {
  HttpMethod,
  HttpRequest,
} from "../../../../domain/ports/wire/out/HttpRequest";
import { Todo } from "../../../../domain/entities/Todo";

export default function useGetList({
  httpClient,
}: {
  httpClient: HttpRequest;
}) {
  const [todos, setTodos] = useState<Todo[]>([]);

  async function getTodos() {
    const response = await httpClient.request({
      method: HttpMethod.GET,
      url: "https://jsonplaceholder.typicode.com/todos",
    });
    setTodos(response.body);
  }

  useEffect(() => {
    getTodos();
  }, []);

  return {
    todos,
  };
}
