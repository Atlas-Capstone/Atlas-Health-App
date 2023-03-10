import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import ExerciseRoutines from "./pages/ExerciseRoutines"
import ScheduleIndex from "./pages/ScheduleIndex"
import MyScheduleIndex from "./pages/MyScheduleIndex"
import ExerciseIndex from "./pages/ExerciseIndex"
import ExerciseShow from "./pages/ExerciseShow"
import Home from "./pages/Home"
import NewSchedule from "./pages/NewSchedule"
import ScheduleEdit from "./pages/ScheduleEdit"
import NewExerciseRoutine from "./pages/NewExerciseRoutine"
import NewsApi from "./pages/NewsApi"
import EditExerciseRoutine from "./pages/EditExerciseRoutine"
import AboutUs from "./pages/AboutUs"
import NotFound from "./pages/NotFound"
import ApiExercise from "./pages/ApiExercise"
import CaloriesBurned from "./pages/CaloriesBurned"
import FoodCalories from "./pages/FoodCalories"

const App = (props) => {
  const [schedules, setSchedules] = useState()
  const [exercises, setExercises] = useState()
  const [exerciseRoutines, setExerciseRoutines] = useState()
  const [chuckNorris, setChuckNorris] = useState()

  useEffect(() => {
    readSchedule()
    readExercise()
    readExerciseRoutines()
    fetchChuckNorris()
  }, [])

  const readSchedule = () => {
    fetch("/schedules")
      .then((response) => response.json())
      .then((payload) => {
        setSchedules(payload)
      })
      .catch((error) => console.log(error))
  }
  const apiKey = process.env.REACT_APP_NINJA_API
  async function fetchChuckNorris() {
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/chucknorris?`,
        {
          headers: {
            "X-Api-Key": apiKey,
            "Content-Type": "application/json",
          },
        }
      )
      const data = await response.json()

      setChuckNorris(data)
    } catch (error) {
      console.error(error)
    }
  }

  const readExercise = () => {
    fetch("/exercises")
      .then((response) => response.json())
      .then((payload) => {
        setExercises(payload)
      })
      .catch((error) => console.log(error))
  }

  const readExerciseRoutines = () => {
    fetch("/exercise_routines")
      .then((response) => response.json())
      .then((payload) => {
        setExerciseRoutines(payload)
      })
      .catch((error) => console.log(error))
  }

  const createSchedule = (schedule) => {
    fetch("/schedules", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ schedule }),
    })
      .then((response) => response.json())
      .then(() => readSchedule())
      .catch((error) => console.error(error))
  }

  const updateSchedule = (schedule, id) => {
    fetch(`/schedules/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ schedule }),
    })
      .then((response) => response.json())
      .then(() => readSchedule())
      .catch((error) => console.error(error))
  }

  const createExerciseRoutine = (exRoutine) => {
    fetch("/exercise_routines", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(exRoutine),
    })
      .then((response) => response.json())

      .then(() => readExerciseRoutines())

      .catch((error) => console.error(error))
  }

  const deleteSchedule = (id) => {
    fetch(`/schedules/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => readSchedule())
      .catch((errors) => console.log("delete errors:", errors))
  }

  const updateExerciseRoutine = (exerciseRoutine, id) => {
    fetch(`/exercise_routines/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(exerciseRoutine),
    })
      .then((response) => response.json())
      .then(() => readExerciseRoutines())
      .catch((errors) => console.log("edit errors:", errors))
  }

  const deleteExerciseRoutine = (id) => {
    fetch(`/exercise_routines/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => readExerciseRoutines())
      .catch((errors) => console.log("edit errors:", errors))
  }

  return (
    <BrowserRouter>
      <Header {...props} />

      <Routes>
        <Route
          exact
          path="/"
          element={<Home {...props} chuckNorris={chuckNorris} />}
        />

        <Route
          exact
          path="/schedulesindex"
          element={<ScheduleIndex {...props} schedules={schedules} />}
        />

        <Route
          exact
          path="/exercisesindex"
          element={<ExerciseIndex {...props} exercises={exercises} />}
        />

        <Route
          exact
          path="/exerciseshow/:id"
          element={<ExerciseShow {...props} exercises={exercises} />}
        />

        <Route
          exact
          path="/myschedulesindex"
          element={
            <MyScheduleIndex
              {...props}
              deleteSchedule={deleteSchedule}
              schedules={schedules}
            />
          }
        />

        <Route
          exact
          path="/exerciseroutines/:id"
          element={
            <ExerciseRoutines
              {...props}
              exercises={exercises}
              exerciseRoutines={exerciseRoutines}
              deleteExerciseRoutine={deleteExerciseRoutine}
            />
          }
        />

        <Route
          exact
          path="/newschedule"
          element={<NewSchedule {...props} createSchedule={createSchedule} />}
        />

        <Route
          exact
          path="/scheduleedit/:id"
          element={
            <ScheduleEdit
              {...props}
              updateSchedule={updateSchedule}
              schedules={schedules}
            />
          }
        />

        <Route
          exact
          path="/newexerciseroutine/:id"
          element={
            <NewExerciseRoutine
              {...props}
              createExerciseRoutine={createExerciseRoutine}
              schedules={schedules}
              exercises={exercises}
            />
          }
        />

        <Route
          exact
          path="/editexerciseroutine/:id"
          element={
            <EditExerciseRoutine
              {...props}
              updateExerciseRoutine={updateExerciseRoutine}
              schedules={schedules}
              exercises={exercises}
              exerciseRoutines={exerciseRoutines}
            />
          }
        />

        <Route path="*" element={<NotFound />} />

        <Route exact path="/newsapi" element={<NewsApi {...props} />} />
        <Route exact path="/exerciseapi" element={<ApiExercise {...props} />} />
        <Route exact path="/calories" element={<CaloriesBurned {...props} />} />
        <Route
          exact
          path="/foodcalories"
          element={<FoodCalories {...props} />}
        />
        <Route exact path="/aboutus" element={<AboutUs {...props} />} />
      </Routes>
    </BrowserRouter>
  ) // End return statement
} // End App

export default App
