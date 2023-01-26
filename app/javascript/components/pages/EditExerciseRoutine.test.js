import React from "react"
import { render, screen } from "@testing-library/react"
import EditExerciseRoutine from "./EditExerciseRoutine"
import { BrowserRouter } from "react-router-dom"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers"

describe("The page that edits a routine", () => {

  const mockRoutine = [{
    id : 1,
    exercise_id : 1,
    schedule_id : 1,
    weight : 30,
    sets : 30,
    reps : 30,
    day : "Monday",
  }]

  const mockExercise =[{
    id: 1
  }]

  beforeEach(() => {
      render(
        <MemoryRouter initialEntries={["/exerciseroutines/1"]}>
        <Routes>
            <Route exact path="/exerciseroutines/:id"
                element={
                    <EditExerciseRoutine 
                    exercises={mockExercise}
                    exerciseRoutines = {mockRoutine} 
                />}
            />
        </Routes>
    </MemoryRouter>
      )
  })

    it("renders without crashing", () => {
        const element = screen.getByText('Exercise');
        expect(element).toBeInTheDocument();
    })

      it("Has a label for exercise routine", () => {
        const exercise = screen.getByText('Exercise');
        expect(exercise).toBeInTheDocument();
        expect(exercise.getAttribute("For")).toEqual("exercise_id");
      })

      it("Has a label for Weight in lb", () => {
        const labelWeight = screen.getByText('Weight in lb');
        expect(labelWeight).toBeInTheDocument();
        expect(labelWeight.getAttribute("For")).toEqual("weight");
      })

      it("Has a label for number of sets", () => {
        const labelNumberOfSets = screen.getByText('Number of Sets');
        expect(labelNumberOfSets).toBeInTheDocument();
      })

      
      it("Has a label for number of reps", () => {

        const labelNumberOfReps = screen.getByText('Number of Reps');

        expect(labelNumberOfReps).toBeInTheDocument();

        expect(screen.getByDisplayValue("Monday")).toBeInTheDocument();
      })


      it("Has a button to update", () => {
        const btnUpdate = screen.getByText('Update');
        expect(btnUpdate).toBeInTheDocument();
      })

})