import { Todo } from "../../../../domain/entities/Todo";
import {
  HttpMethod,
  HttpRequest,
} from "../../../../domain/ports/wire/out/HttpRequest";

export default function useEditTodo({
  httpClient,
}: {
  httpClient: HttpRequest;
}) {
  const baseUrl = "https://67379b144eb22e24fca5b161.mockapi.io/api/v1/task";

  async function editTodo(id: number, todo: Pick<Todo, "title" | "completed">) {
    await httpClient.request({
      method: HttpMethod.PUT,
      url: `${baseUrl}/${id}`,
      body: todo,
    });
  }

  return {
    editTodo,
  };
}
