import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

describe("Booking Form", () => {
  test("Submission is disabled if all required inputs not complete", () => {
    const handleSubmit = jest.fn();
    render(<BookingForm onSubmit={handleSubmit} />);

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled");
  });
});
