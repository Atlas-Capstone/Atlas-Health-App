import React from "react"
import { NavLink, useParams } from "react-router-dom"
import ExerciseRoutineCard from "../components/ExerciseRoutineCard"

const ExerciseRoutines = ({
  current_user,
  exercises,
  exerciseRoutines,
  logged_in,
}) => {
  const { id } = useParams()
  const currentRoutines = exerciseRoutines?.filter(
    (item) => item.schedule_id === +id
  )
  const mondayRoutine = currentRoutines?.filter(
    (item) => item.day.toLowerCase() === "monday"
  )
  const tuesdayRoutine = currentRoutines?.filter(
    (item) => item.day.toLowerCase() === "tuesday"
  )
  const wednesdayRoutine = currentRoutines?.filter(
    (item) => item.day.toLowerCase() === "wednesday"
  )
  const thursdayRoutine = currentRoutines?.filter(
    (item) => item.day.toLowerCase() === "thursday"
  )
  const fridayRoutine = currentRoutines?.filter(
    (item) => item.day.toLowerCase() === "friday"
  )
  const saturdayRoutine = currentRoutines?.filter(
    (item) => item.day.toLowerCase() === "saturday"
  )
  const sundayRoutine = currentRoutines?.filter(
    (item) => item.day.toLowerCase() === "sunday"
  )

  return (
    <div className="min-h-screen flex items-center flex-col gap-6 pb-24 bg-gradient-to-br from-[#7DAFC7] to-[#92692C] text-white">
      <h1 className="text-4xl font-mono font-bold  mt-5">Exercise Routines!</h1>

      <div className="flex flex-col lg:flex lg:flex-row lg:flex-wrap min-w-screen gap-6">
        {mondayRoutine?.length > 0 && (
          <div className="bg-[#d9d9d9] bg-opacity-30 px-10 py-6 rounded-2xl">
            <ExerciseRoutineCard
              exerciseRoutine={mondayRoutine}
              exercises={exercises}
            />
          </div>
        )}
        {tuesdayRoutine?.length > 0 && (
          <div className="bg-[#d9d9d9] bg-opacity-30 px-10 py-6 rounded-2xl">
            <ExerciseRoutineCard
              exerciseRoutine={tuesdayRoutine}
              exercises={exercises}
            />
          </div>
        )}
        {wednesdayRoutine?.length > 0 && (
          <div className="bg-[#d9d9d9] bg-opacity-30 px-10 py-6 rounded-2xl">
            <ExerciseRoutineCard
              exerciseRoutine={wednesdayRoutine}
              exercises={exercises}
            />
          </div>
        )}
        {thursdayRoutine?.length > 0 && (
          <div className="bg-[#d9d9d9] bg-opacity-30 px-10 py-6 rounded-2xl">
            <ExerciseRoutineCard
              exerciseRoutine={thursdayRoutine}
              exercises={exercises}
            />
          </div>
        )}
        {fridayRoutine?.length > 0 && (
          <div className="bg-[#d9d9d9] bg-opacity-30 px-10 py-6 rounded-2xl">
            <ExerciseRoutineCard
              exerciseRoutine={fridayRoutine}
              exercises={exercises}
            />
          </div>
        )}
        {saturdayRoutine?.length > 0 && (
          <div className="bg-[#d9d9d9] bg-opacity-30 px-10 py-6 rounded-2xl">
            <ExerciseRoutineCard
              exerciseRoutine={saturdayRoutine}
              exercises={exercises}
            />
          </div>
        )}
        {sundayRoutine?.length > 0 && (
          <div className="bg-[#d9d9d9] bg-opacity-30 px-10 py-6 rounded-2xl">
            <ExerciseRoutineCard
              exerciseRoutine={sundayRoutine}
              exercises={exercises}
            />
          </div>
        )}
      </div>
      {logged_in && (
        <NavLink
          to={`/newexerciseroutine/${id}`}
          className="p-3 bg-teal-700 text-white rounded-full"
        >
          Add Routine
        </NavLink>
      )}
    </div>
  )
}

export default ExerciseRoutines
