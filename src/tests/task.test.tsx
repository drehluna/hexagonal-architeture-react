import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../presentation/pages/task";

describe("Task", () => {
  it("expect button create task to be in the document", () => {
    render(<Home />);
    expect(screen.getByText("Create Task")).toBeInTheDocument();
  });
  it("expect header to be in the document", () => {
    render(<Home />);
    expect(screen.getByText("Task List")).toBeInTheDocument();
  });
  it("expect list to be in the document", () => {
    render(<Home />);
    expect(screen.getByText("random1")).toBeInTheDocument();
    expect(screen.getByText("random2")).toBeInTheDocument();
    expect(screen.getByText("random3")).toBeInTheDocument();
  });
});
