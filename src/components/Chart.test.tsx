// src/components/Chart.test.tsx

import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import Chart from "./Chart";

const mockData = [
  { date: "2023-01-01", price: 1000 },
  { date: "2023-01-02", price: 2000 },
  { date: "2023-01-03", price: 3000 },
];

describe("Chart Component", () => {
  it("renders the LineChart with data", () => {
    render(<Chart data={mockData} pieData={[]} />); 
    act(() => {
      window.dispatchEvent(new Event('resize')); 
    });
    expect(screen.getByText("Price Over Time")).toBeInTheDocument();
  });

  it("renders the BarChart with data", () => { 
    render(<Chart data={mockData} pieData={[]} />);
    act(() => {
      window.dispatchEvent(new Event('resize')); 
    });
    expect(screen.getByText("Bar Chart")).toBeInTheDocument();
  });
});
