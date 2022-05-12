import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../components/Pagination";


describe("[ Pagination ]", () => {
  it("should render", () => {
    render(<Pagination />);

    expect(screen).toBeTruthy();

    // Expected initial texts
    expect(screen.queryByText("Current page: 1")).toBeTruthy();
    expect(screen.queryByText("Page: 0")).toBeInTheDocument();
    expect(screen.queryByText("Page: 2")).toBeInTheDocument();

    // Expected buttons
    expect(screen.queryAllByRole("button")).toHaveLength(2);

    const button1 = screen.getByRole("button", { name: "Page: 0" });
    expect(button1).toBeInTheDocument();
    expect(button1).toBeDisabled();

    const button2 = screen.getByRole("button", { name: "Page: 2" });
    expect(button2).toBeInTheDocument();
    //expect(button1).not.toBeDisabled();
  });

  it("dummy testing", () => {
    render(<Pagination/>);

    const nextButton = screen.getByRole("button", { name: "Page: 2" });
    fireEvent.click(nextButton);
    expect(screen.queryByText("Current page: 2")).toBeInTheDocument();

    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    expect(screen.queryByText("Current page: 6")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Page: 5" }));
    expect(screen.queryByText("Current page: 5")).toBeInTheDocument();
  });
});
