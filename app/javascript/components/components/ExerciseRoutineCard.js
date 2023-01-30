import React from "react"
import { NavLink } from "react-router-dom"

const ExerciseRoutineCard = ({
  exerciseRoutine,
  exercises,
  deleteExerciseRoutine,
}) => {
  return (
    <div className="flex flex-col gap-8 items-center pb-2">
      {exerciseRoutine?.length > 0 && (
        <h2 className="font-mono font-bold text-xl underline mt-3">
          {exerciseRoutine[0].day}
        </h2>
      )}

      {exerciseRoutine?.map((item, index) => (
        <div key={index} className="flex gap-4 ">
          {exercises
            ?.filter((ex) => ex.id === item.exercise_id)
            .map((exer, index) => (
              <div className="w-40" key={index}>
                <NavLink to={`/exerciseshow/${exer.id}`}>
                  <h3 className="font-mono font-semibold font-italic hover:underline">
                    {exer.name}
                  </h3>
                </NavLink>
                <NavLink to={`/exerciseshow/${exer.id}`}>
                  <img
                    src={exer.image}
                    alt={exer.name}
                    className="w-40 h-40 object-fill rounded-2xl"
                  />
                </NavLink>
              </div>
            ))}
          <div className="flex flex-col justify-center items-center">
            <p className="font-mono">Weight: {item.weight}</p>
            <p className="font-mono">Sets: {item.sets}</p>
            <p className="font-mono">Reps: {item.reps}</p>

            <div className="flex gap-2 justify-center items-center mt-2">
              <NavLink
                to={`/editexerciseroutine/${item.id}`}
                className="bg-teal-700 px-3 py-1 rounded-full"
              >
                Edit
              </NavLink>

              <button
                className="bg-red-600 px-3 py-1 rounded-full"
                onClick={() => deleteExerciseRoutine(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ExerciseRoutineCard
