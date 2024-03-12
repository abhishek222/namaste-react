import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


test('should load contact us component', () => {
    render(<Contact/>);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})
test('should load button in  component', () => {
    render(<Contact/>);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
})
test('should load button text in component', () => {
    render(<Contact/>);
    const textButton = screen.getByText("Submit");

    expect(textButton).toBeInTheDocument();
})

test('should load imput name  in component', () => {
    render(<Contact/>);
    //query
    const inputName = screen.getByPlaceholderText("name");    //react element on virtual component
    //Assertion
    expect(inputName).toBeInTheDocument();
})
test('should load imput name  in component', () => {
    render(<Contact/>);
    //query
    const inputboxes = screen.getAllByRole("textbox");    //for multiple items use ALL
    //Assertion
    // expect(inputboxes.length).toBe(2);
    expect(inputboxes.length).not.toBe(3);
})