import React from "react"
import { render } from "@testing-library/react"
import MyScheduleIndex from "./ScheduleIndex"

describe("<MyScheduleIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<MyScheduleIndex />, div)
  })
})