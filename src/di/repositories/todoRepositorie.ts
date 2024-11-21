import axiosAdapter from "../../infra/axios-adapter";
import TodoRepository from "../../repositories/taskRepositorie";

const todoRepositorieFactory = () => {
  return new TodoRepository(axiosAdapter);
};

export default todoRepositorieFactory;
