
// Begin react imports
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// End react imports


// Begin components imports
import Header from "./components/Header";
import ExerciseRoutines from "./components/ExerciseRoutines";
// End components


// Begin pages imports
import ScheduleIndex from "./pages/ScheduleIndex";
import MyScheduleIndex from "./pages/MyScheduleIndex";
import Home from "./pages/Home";
// End pages imports


// End import statements
// Begin App definition


const App = (props) => {

  // Begin state functions

  const [schedules, setSchedules] = useState();

  const [exercises, setExercises] = useState();

  const [exerciseRoutines, setExerciseRoutines] = useState();

  useEffect(() => {
    readSchedule();
    readExercise();
    readExerciseRoutines();
  }, []);

  // End state functions
  // Begin fetch functions

  const readSchedule = () => {
    fetch("/schedules")
      .then((response) => response.json())
      .then((payload) => {
        setSchedules(payload);
      })
      .catch((error) => console.log(error));
  };

  const readExercise = () => {
    fetch("/exercises")
      .then((response) => response.json())
      .then((payload) => {
        setExercises(payload);
        
      })
      .catch((error) => console.log(error));
  };

  const readExerciseRoutines = () => {
    fetch("/exercise_routines")
      .then((response) => response.json())
      .then((payload) => {
        setExerciseRoutines(payload);
        console.log(payload);
      })
      .catch((error) => console.log(error));
  };

  // End App functions
  // Begin return

  return (

    <BrowserRouter>

      <Header {...props} />

      <Routes>

        <Route exact path="/" 
          element={<Home {...props} />}
         />

        <Route exact path="/schedulesindex"
          element={<ScheduleIndex {...props} schedules={schedules} />}
        />

        <Route exact path="/myschedulesindex"
          element={<MyScheduleIndex {...props} schedules={schedules} />}
        />

        <Route exact path="/exerciseroutines/:id"
          element={<ExerciseRoutines {...props} exercises={exercises}
          exerciseRoutines = {exerciseRoutines} />}
        />

      </Routes>
    </BrowserRouter>
  ); // End return statement
}; // End App

export default App;
