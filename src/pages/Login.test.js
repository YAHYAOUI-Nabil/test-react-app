import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import Login from "./Login";

test("username input should be rendered", () => {
    render(<Login />);
    const usernameInputEl = screen.getByPlaceholderText(/username/i);
    expect(usernameInputEl).toBeInTheDocument();
});

test("email input should be rendered", () => {
render(<Login />);
const passwordInputEl = screen.getByPlaceholderText(/password/i);
expect(passwordInputEl).toBeInTheDocument();
});
test("submit input should be rendered", () => {
render(<Login />);
const passwordInputEl = screen.getByRole('button');
expect(passwordInputEl).toBeInTheDocument();
});