import React from "react"
import { render, screen } from "@testing-library/react"
import NewExerciseRoutine from "./NewExerciseRoutine"
import { BrowserRouter } from "react-router-dom"

describe("Create new exercise routine page", () => {

    beforeEach(() => {
        render(
            <BrowserRouter>
                <NewExerciseRoutine />
            </BrowserRouter>
        )
    })

    it("renders without crashing", () => {
        const element = screen.getByText('Create Exercise Routine');
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
      })

})