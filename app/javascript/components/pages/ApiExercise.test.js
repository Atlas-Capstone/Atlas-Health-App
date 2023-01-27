import React from "react"
import { render, screen } from "@testing-library/react"
import ApiExercise from "./ApiExercise"
import { BrowserRouter } from "react-router-dom"

describe("<ApiExercise />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ApiExercise />
      </BrowserRouter>
    )
  })
  it("renders the ApiExercise ", () => {
    const element = screen.getByText(/Exercise Wiki/i)
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent("Exercise Wiki")
  })

  it("has a form for muscle, difficult, and exercise type", () => {
    const muscle = screen.getByText("What Body Part Do you Want to Exercise?")
    expect(muscle.getAttribute("For")).toEqual("muscle-group")

    const difficulty = screen.getByText("Difficulty Level (optional)")
    expect(difficulty.getAttribute("For")).toEqual("difficulty")

    const type = screen.getByText("Exercise Type (optional)")
    expect(type.getAttribute("For")).toEqual("type")

    const button = screen.getByText("Submit")
    expect(button.getAttribute("Type")).toEqual("button")
  })
})
