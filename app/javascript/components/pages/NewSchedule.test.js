import React from "react"
import { render, screen } from "@testing-library/react"
import NewSchedule from "./NewSchedule"
import { BrowserRouter } from "react-router-dom"

describe("<NewSchedule />", () => {
  it("renders without crashing", () => {
    const user = {id:1}
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <NewSchedule user = {user} logged_in = {true} />
      </BrowserRouter>,
     div)
     const element = screen.getByText("Schedule")
     expect (element).toBeInTheDocument
  })
})





