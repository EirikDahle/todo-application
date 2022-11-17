import {screen, cleanup, render} from "@testing-library/react"
import '@testing-library/jest-dom'
import App from '../../App.js' 

test("navbar displays correct", () => {
    render(<App />)
    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Post-it todos")
});