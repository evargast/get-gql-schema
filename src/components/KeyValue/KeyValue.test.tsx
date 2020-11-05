import { render, screen } from "@testing-library/react";
import React from "react";

import KeyValue from "./KeyValue";

// TODO: add proper tests for KeyValue component
test("KeyValue renders properly", () => {
    render(<KeyValue setJSON={jest.fn()} />);
    expect(screen.getByText("KeyValue")).toBeInTheDocument();
});
