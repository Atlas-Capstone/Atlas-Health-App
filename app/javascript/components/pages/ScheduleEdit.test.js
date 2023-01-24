import React from "react"
import { render, screen } from "@testing-library/react"
import ScheduleEdit from "./ScheduleEdit"
import { MemoryRouter, Routes, Route } from "react-router-dom"

describe("<ScheduleEdit />", () => {
    it("renders without crashing", () => {
        const user = {id:1}
        const mockSchedules= [{
            name: 'asdf',
            days_per_week: 4,
            user_id: 1
        }]
        const div = document.createElement("div")
        render(
            <MemoryRouter initialEntries={["/scheduleedit/1"]}>
              <Routes>
                <Route path="scheduleedit/:id" element={<ScheduleEdit schedules={mockSchedules} user = {user} logged_in = {true} />} />
              </Routes>
            </MemoryRouter>, div
        )
         const element = screen.getByText("Name")
         expect (element).toBeInTheDocument
      })
    })