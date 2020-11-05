import { render, screen } from "@testing-library/react";
import React from "react";

import InputForm from "./InputForm";

// TODO: add proper tests for InputForm component
test("InputForm renders properly", () => {
    render(<InputForm />);
    expect(screen.getByText("InputForm")).toBeInTheDocument();
});
