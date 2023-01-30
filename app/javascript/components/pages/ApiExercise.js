import React, { useEffect, useState } from "react"

const ApiExercise = () => {
  const [exercises, setExercises] = useState()
  const [muscle, setMuscle] = useState("")
  const [page, setPage] = useState(0)
  const [diff, setDiff] = useState("")
  const [exerciseType, setExerciseType] = useState("")

  const muscles = [
    "abdominals",
    "abductors",
    "adductors",
    "biceps",
    "calves",
    "chest",
    "forearms",
    "glutes",
    "hamstrings",
    "lats",
    "lower_back",
    "middle_back",
    "neck",
    "quadriceps",
    "traps",
    "triceps",
  ]

  const difficulty = ["beginner", "intermediate", "expert"]

  const type = [
    "cardio",
    "olympic_weightlifting",
    "plyometrics",
    "powerlifting",
    "strength",
    "stretching",
    "strongman",
  ]

  const apiKey = process.env.REACT_APP_NINJA_API
  async function fetchExercises(
    muscle = "",
    difficulty = "",
    type = "",
    offset = 0
  ) {
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}&difficulty=${difficulty}&type=${type}&offset=${offset}`,
        {
          headers: {
            "X-Api-Key": apiKey,
            "Content-Type": "application/json",
          },
        }
      )
      const data = await response.json()
      console.log(data)
      setExercises(data)
    } catch (error) {
      console.error(error)
    }
  }
  function handleSubmit() {
    fetchExercises(muscle, diff, exerciseType)
  }

  function next() {
    setPage((prev) => prev + 10)
  }
  function previous() {
    page <= 10 ? setPage(0) : setPage((prev) => prev - 10)
  }
  useEffect(() => {
    if (exercises) {
      fetchExercises(muscle, diff, exerciseType, page)
    }
  }, [page])

  return (
    <div className="bg-gradient-to-br text-white from-[#7DAFC7] min-h-screen to-white">
      <h1 className="text-center text-3xl font-mono font-bold pt-10">
        Exercise Wiki
      </h1>
      <p className="mx-6 text-center">
        Browse thousands of exercises by body part difficulty level or exercise
        type.
      </p>
      <div className="flex flex-col items-center mt-5">
        <form className="flex flex-col gap-3">
          <label htmlFor="muscle-group">
            What Body Part Do you Want to Exercise?
          </label>
          <select
            type="text"
            className="rounded-full leading-5 text-black"
            name="muscle-group"
            onChange={(e) => setMuscle(e.target.value)}
          >
            <option value="">None</option>
            {muscles.map((muscle, i) => (
              <option key={i} value={muscle}>
                {muscle}
              </option>
            ))}
          </select>
          <label htmlFor="difficulty">Difficulty Level (optional)</label>
          <select
            className="rounded-full leading-5 text-black"
            type="text"
            name="difficulty"
            onChange={(e) => setDiff(e.target.value)}
          >
            <option value="">None</option>
            {difficulty.map((diff, i) => (
              <option key={i} value={diff}>
                {diff}
              </option>
            ))}
          </select>
          <label htmlFor="type">Exercise Type (optional)</label>
          <select
            className="rounded-full leading-5 text-black"
            type="text"
            name="type"
            onChange={(e) => setExerciseType(e.target.value)}
          >
            <option value="">None</option>
            {type.map((t, i) => (
              <option key={i} value={t}>
                {t}
              </option>
            ))}
          </select>
          <button
            className="bg-teal-800 text-white p-3 rounded-full mt-3 hover:shadow-xl hover:bg-teal-600"
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>

      <div>
        {exercises && (
          <div className="flex justify-center m-6">
            <a
              onClick={previous}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
            >
              Previous
            </a>

            <a
              onClick={next}
              className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
            >
              Next
            </a>
          </div>
        )}
        {exercises?.length < 1 && (
          <h1 className="text-center text-2xl font-bold font-italic">
            No Such Exercise
          </h1>
        )}
        {exercises?.map((exercise, index) => (
          <div
            key={index}
            className="p-10 mb-10 bg-gray-500 bg-opacity-50 rounded-2xl text-white mx-10"
          >
            <h3 className="underline text-2xl mb-2">{exercise.name} </h3>

            <div className="flex flex-wrap gap-3 items-center my-2">
              <p className="rounded-full bg-blue-600 text-white px-2">
                {exercise.difficulty}
              </p>
              <p className="rounded-full bg-blue-600 text-white px-2">
                {exercise.type}
              </p>
              <p className="rounded-full bg-blue-600 text-white px-2">
                {exercise.equipment}
              </p>
              <p className="rounded-full bg-blue-600 text-white px-2">
                {exercise.muscle}
              </p>
            </div>
            <p className="line-clamp-2 hover:line-clamp-none">
              {exercise.instructions}
            </p>
          </div>
        ))}
      </div>
      {exercises && (
        <div className="flex justify-center m-6">
          <a
            onClick={previous}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
          >
            Previous
          </a>

          <a
            onClick={next}
            className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
          >
            Next
          </a>
        </div>
      )}
    </div>
  )
}

export default ApiExercise
