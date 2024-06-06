// src/components/Filters.test.tsx

import React, { act } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Filters from "./Filters";

describe("Filters Component", () => {
  it("renders the coin and days dropdowns", () => {
    render(<Filters onCoinChange={jest.fn()} onDaysChange={jest.fn()} />);
    act(() => {
      window.dispatchEvent(new Event('resize')); 
    });
    expect(screen.getByLabelText("Select Coin:")).toBeInTheDocument();
    expect(screen.getByLabelText("Select Days:")).toBeInTheDocument();
  });

  it("calls onCoinChange when a coin is selected", () => {
    const mockOnCoinChange = jest.fn();
    render(
      <Filters onCoinChange={mockOnCoinChange} onDaysChange={jest.fn()} />
    );
    act(() => {
      window.dispatchEvent(new Event('resize')); 
    });
    fireEvent.change(screen.getByLabelText("Select Coin:"), {
      target: { value: "ethereum" },
    });
    expect(mockOnCoinChange).toHaveBeenCalledWith("ethereum");
  });

  it("calls onDaysChange when days are selected", () => {
    const mockOnDaysChange = jest.fn();
    render(
      <Filters onCoinChange={jest.fn()} onDaysChange={mockOnDaysChange} />
    );
    act(() => {
      window.dispatchEvent(new Event('resize')); 
    });
    fireEvent.change(screen.getByLabelText("Select Days:"), {
      target: { value: "30" },
    });
    expect(mockOnDaysChange).toHaveBeenCalledWith(30);
  });
});
