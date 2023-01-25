import React from "react"
import { getByText, render } from "@testing-library/react"
import Home from "./Home"
import logo from "/app/assets/images/logo.png"

describe("Home component", () => {
  it("should render the Home page", () => {
    const { getByText } = render(<Home />)
    const homePage = getByText("BEGIN")
    expect(homePage).toBeInTheDocument()
  })
})
