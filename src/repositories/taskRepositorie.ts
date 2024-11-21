import { Todo } from "../domain/entities/Todo";
import { HttpClient, HttpMethod } from "../domain/ports/wire/out/HttpRequest";
import { ITodoRepository } from "../domain/repositories/interfaces/ITodoRepositorie";

class TodoRepository implements ITodoRepository {
  private readonly baseUrl =
    "https://67379b144eb22e24fca5b161.mockapi.io/api/v1/task";

  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async createTodo(todo: Pick<Todo, "title" | "completed">): Promise<Todo> {
    const response = await this.httpClient.request({
      method: HttpMethod.POST,
      url: `${this.baseUrl}`,
      body: todo,
    });
    return response.body;
  }

  async deleteTodo(id: number): Promise<void> {
    await this.httpClient.request({
      method: HttpMethod.DELETE,
      url: `${this.baseUrl}/${id}`,
    });
  }

  async updateTodo(id: number, todo: Todo): Promise<Todo> {
    const response = await this.httpClient.request({
      method: HttpMethod.PUT,
      url: `${this.baseUrl}/${id}`,
      body: todo,
    });
    return response.body;
  }

  async getTodos(): Promise<Todo[]> {
    const response = await this.httpClient.request({
      method: HttpMethod.GET,
      url: `${this.baseUrl}`,
    });
    return response.body;
  }
}

export default TodoRepository;
