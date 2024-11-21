import { HttpMethod } from "../../domain/ports/wire/out/HttpRequest";
import TodoRepository from "../../repositories/taskRepositorie";

const fakeHttpClient = {
  request: jest.fn(),
};

beforeAll(() => {
  jest.spyOn(fakeHttpClient, "request").mockResolvedValue({
    statusCode: 200,
    body: [{ id: 1, title: "random1", completed: false, userId: 1 }],
  });
});

describe("TodoRepositorie", () => {
  it("should initialize repositorie", async () => {
    const todoRepositorie = new TodoRepository(fakeHttpClient);

    expect(todoRepositorie.createTodo).toBeDefined();
    expect(todoRepositorie.deleteTodo).toBeDefined();
    expect(todoRepositorie.updateTodo).toBeDefined();
    expect(todoRepositorie.getTodos).toBeDefined();
  });

  it("should create a task", async () => {
    const todoRepositorie = new TodoRepository(fakeHttpClient);

    const task = await todoRepositorie.createTodo({
      title: "Test Task",
      completed: false,
    });

    expect(task).toEqual([
      {
        id: 1,
        title: "random1",
        completed: false,
        userId: 1,
      },
    ]);
  });

  it("should delete a task", async () => {
    const todoRepositorie = new TodoRepository(fakeHttpClient);

    await todoRepositorie.deleteTodo(1);

    expect(fakeHttpClient.request).toHaveBeenCalledWith({
      method: HttpMethod.DELETE,
      url: "https://67379b144eb22e24fca5b161.mockapi.io/api/v1/task/1",
    });
  });

  it("should call update a task", async () => {
    const todoRepositorie = new TodoRepository(fakeHttpClient);

    await todoRepositorie.updateTodo(1, {
      id: 1,
      title: "random1",
      completed: true,
      userId: 1,
    });

    expect(fakeHttpClient.request).toHaveBeenCalledWith({
      method: HttpMethod.PUT,
      url: "https://67379b144eb22e24fca5b161.mockapi.io/api/v1/task/1",
      body: {
        id: 1,
        title: "random1",
        completed: true,
        userId: 1,
      },
    });
  });

  it("should get all tasks", async () => {
    const todoRepositorie = new TodoRepository(fakeHttpClient);

    const tasks = await todoRepositorie.getTodos();

    expect(tasks).toEqual([
      {
        id: 1,
        title: "random1",
        completed: false,
        userId: 1,
      },
    ]);
  });
});
