import {
  act,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../presentation/pages/task";
import axiosAdapter from "../../infra/axios-adapter";
import useGetList from "../../presentation/pages/task/hooks/use-get-list";

beforeAll(() => {
  jest.spyOn(axiosAdapter, "request").mockResolvedValue({
    statusCode: 200,
    body: [{ id: 1, title: "random1", completed: false, userId: 1 }],
  });
});

describe("UseGetList", () => {
  it("expect to render hook and returns a list of todos", async () => {
    const { result } = renderHook(() =>
      useGetList({ httpClient: axiosAdapter })
    );
    await waitFor(() => {
      expect(result.current.todos).toHaveLength(1);
    });
  });

  it("expect to content 1 todo with title, id and userId", async () => {
    const { result } = renderHook(() =>
      useGetList({ httpClient: axiosAdapter })
    );
    await waitFor(() => {
      expect(result.current.todos).toEqual([
        { id: 1, title: "random1", completed: false, userId: 1 },
      ]);
    });
  });
});

describe("Home", () => {
  it("expect to render component and show a list of todos", async () => {
    await act(async () => {
      render(<Home httpClient={axiosAdapter} />);
    });

    await waitFor(() => {
      expect(screen.getByText("random1")).toBeInTheDocument();
    });
  });
});
