import { useState } from "react";
import { Todo } from "../../../../domain/entities/Todo";
import {
  HttpMethod,
  HttpRequest,
} from "../../../../domain/ports/wire/out/HttpRequest";

export default function useCreateTodo({
  httpClient,
}: {
  httpClient: HttpRequest;
}) {
  const baseUrl = "https://67379b144eb22e24fca5b161.mockapi.io/api/v1/task";
  const [loading, setLoading] = useState<boolean>(false);
  const createTodo = async ({
    data,
  }: {
    data: Pick<Todo, "title" | "completed">;
  }) => {
    try {
      const response = await httpClient.request({
        method: HttpMethod.POST,
        url: `${baseUrl}`,
        body: {
          ...data,
        },
      });
      return response.body;
    } catch (error) {
      console.error(error);
    }
  };

  const refetch = async ({
    data,
  }: {
    data: Pick<Todo, "title" | "completed">;
  }) => {
    setLoading(true);
    await createTodo({ data });
    setLoading(false);
  };

  return {
    createTodo,
    refetch,
    loading,
  };
}
