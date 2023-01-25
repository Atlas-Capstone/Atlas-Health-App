
import React from "react"

import { render } from "@testing-library/react"

import ExerciseIndex from "./ExerciseIndex"

describe("<ExerciseIndex />", () => {
  
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ExerciseIndex />, div)
  })
})