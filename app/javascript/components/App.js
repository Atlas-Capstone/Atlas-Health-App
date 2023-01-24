import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ExerciseRoutines from "./components/ExerciseRoutines";
import ScheduleIndex from "./pages/ScheduleIndex";
import MyScheduleIndex from "./pages/MyScheduleIndex";
import Home from "./pages/Home";
import NewSchedule from './pages/NewSchedule'
import ScheduleEdit from "./pages/ScheduleEdit";


const App = (props) => {

  const [schedules, setSchedules] = useState();

  const [exercises, setExercises] = useState();

  const [exerciseRoutines, setExerciseRoutines] = useState();

  useEffect(() => {
    readSchedule();
    readExercise();
    readExerciseRoutines();
  }, []);

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
      })
      .catch((error) => console.log(error));
  };

  const createSchedule = (schedule) => {
    fetch("http://localhost:3000/schedules", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ schedule }),
    })
      .then((response) => response.json())
      .then(() => readSchedule())
      .catch((error) => console.error(error));
  };

  const updateSchedule = (schedule, id) => {
    console.log(schedule, id)
    fetch(`http://localhost:3000/schedules/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ schedule }),
    })
      .then((response) => response.json())
      .then(() => readSchedule())
      .catch((error) => console.error(error));
  };

  const createExerciseRoutine = (schedule, id) => {
    console.log(schedule, id)
    fetch(`http://localhost:3000/schedules/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ schedule }),
    })
      .then((response) => response.json())
      .then(() => readSchedule())
      .catch((error) => console.error(error));
  };

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

        <Route exact path="/newschedule"
          element={<NewSchedule {...props} createSchedule={createSchedule} />}
          />

        <Route
          exact
          path="/scheduleedit/:id"
          element={
            <ScheduleEdit {...props} updateSchedule={updateSchedule} schedules={schedules}
            />
          }
        />

        <Route
          exact path="/exerciseroutine/:id"
          element={ <ScheduleEdit {...props} 
            updateSchedule={updateSchedule} 
            schedules={schedules}
            />
          }
        />

      </Routes>
    </BrowserRouter>
  ); // End return statement
}; // End App

export default App;
