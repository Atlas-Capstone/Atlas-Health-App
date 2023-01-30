import React from "react"
import { useParams, NavLink } from "react-router-dom"

const ExerciseShow = ({ exercises }) => {
  const { id } = useParams()
  const currentExercise = exercises?.find((exercise) => exercise.id === +id)

  return (
    <>
      {currentExercise && (
        <div>
          <div className=" bg-gradient-to-br from-[#7DAFC7] to-[#922C2C] pt-6  pr-2 min-h-screen gap-2 flex flex-col items-center">
            <h1 className="text-white text-3xl font-mono my-4 bg-gray-400 rounded-full bg-opacity-50 p-3">
              {currentExercise.name}
            </h1>

            <div
              key={currentExercise.id}
              className="text-white items-center justify-center bg-opacity-50 bg-gray-500 rounded-2xl flex flex-col"
            >
              <iframe
                className="rounded-t-2xl w-full min-h-[250px]"
                src={currentExercise.video}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>

              <div className="p-10 flex flex-col justify-center">
                <p>{currentExercise.description}</p>
                <p>Category: {currentExercise.category}</p>
                <p>Difficulty: {currentExercise.difficulty}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ExerciseShow
