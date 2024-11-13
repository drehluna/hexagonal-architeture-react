import { HttpMethod } from "../../domain/ports/wire/out/HttpRequest";
import axiosAdapter from "../../infra/axios-adapter";

describe("AxiosAdapter", () => {
  it("expect to return a list of todos", async () => {
    const response = await axiosAdapter.request({
      method: HttpMethod.GET,
      url: "https://jsonplaceholder.typicode.com/todos",
    });

    expect(response.body).toHaveLength(200);
  });
  it("expect to return a todo by id", async () => {
    const response = await axiosAdapter.request({
      method: HttpMethod.GET,
      url: "https://jsonplaceholder.typicode.com/todos/1",
    });

    expect(response.body).toEqual({
      id: 1,
      title: "delectus aut autem",
      completed: false,
      userId: 1,
    });
  });
});
