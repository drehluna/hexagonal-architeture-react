import { Todo } from "../../../../domain/entities/Todo";
import {
  HttpMethod,
  HttpRequest,
} from "../../../../domain/ports/wire/out/HttpRequest";

export default function useDeleteTodo({
  httpClient,
}: {
  httpClient: HttpRequest;
}) {
  const baseUrl = "https://67379b144eb22e24fca5b161.mockapi.io/api/v1/task";

  async function deleteTodo(id: number) {
    await httpClient.request({
      method: HttpMethod.DELETE,
      url: `${baseUrl}/${id}`,
    });
  }

  return {
    deleteTodo,
  };
}
