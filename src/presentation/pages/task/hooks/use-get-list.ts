import { useCallback, useEffect, useState } from "react";
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
  const [loading, setLoading] = useState<boolean>(false);

  const baseUrl = "https://67379b144eb22e24fca5b161.mockapi.io/api/v1/task";

  async function getTodos() {
    try {
      setLoading(true);
      const response = await httpClient.request({
        method: HttpMethod.GET,
        url: `${baseUrl}`,
      });
      setTodos(response.body);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  const refetch = useCallback(async () => {
    setLoading(true);
    await getTodos();
    setLoading(false);
  }, [getTodos]);

  useEffect(() => {
    getTodos();
  }, []);

  return {
    todos,
    refetch,
    loading,
  };
}
