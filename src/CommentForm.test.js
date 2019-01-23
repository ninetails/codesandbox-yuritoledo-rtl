import React from "react";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import { render, fireEvent } from "react-testing-library";
import userEvent from "user-event";
import CommentForm from "./CommentForm.jsx";

describe("Comment Form", () => {
  test("submit", () => {
    const comment = "Never put off until tomorrow what can be done today.";
    const author = "Sensei Wu";
    const mockOnSubmit = jest.fn();

    const { getByTestId, container } = render(
      <CommentForm submit={mockOnSubmit} />
    );

    userEvent.type(getByTestId("author"), author);
    userEvent.type(getByTestId("comment"), comment);
    fireEvent.click(getByTestId("submit"));

    expect(mockOnSubmit).toHaveBeenCalledWith({ comment, author });
  });
});
