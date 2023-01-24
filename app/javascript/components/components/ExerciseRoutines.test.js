import React from "react"
import ExerciseRoutines from "./ExerciseRoutines"
import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe("<ExerciseRoutines />", () => {

    beforeEach(() => {

        const div = document.createElement("div")

        const mockExercise = [{
            id : 1,
            name : "the push pull",
            description : "asdf",
            category : "high",
            difficulty : "higher",
            image : "image.url"
        }]

        const mockRoutine = [{
            id : 1,
            exercise_id : 1,
            schedule_id : 1,
            weight : 30,
            sets : 30,
            reps : 30,
            day : "Monday",
        }]

        render(
            <MemoryRouter initialEntries={["/exerciseroutines/1"]}>
                <Routes>
                    <Route exact path="/exerciseroutines/:id"
                        element={
                            <ExerciseRoutines 
                            exercises={mockExercise}
                            exerciseRoutines = {mockRoutine} 
                        />}
                    />
                </Routes>
            </MemoryRouter>, <div></div>
        )
    });

    it("Renders to the page", () => {
        const routinesPage = screen.getByText('Monday');
        expect(routinesPage).toBeInTheDocument();
    })

    it("Renders the exercise name to the page", () => {
        const exerciseName = screen.getByText('the push pull');
        expect(exerciseName).toBeInTheDocument();
    })

    it("Renders 'Exercise Routines!'", () => {
        const exerciseName = screen.getByText('Exercise Routines!');
        expect(exerciseName.toBeInTheDocument);
    })
})