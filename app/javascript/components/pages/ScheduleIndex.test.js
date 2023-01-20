import React from "react"
import { render } from "@testing-library/react"
import ScheduleIndex from "./ScheduleIndex"

describe("<ScheduleIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ScheduleIndex />, div)
  })
})