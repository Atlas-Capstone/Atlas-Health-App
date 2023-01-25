import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const EditExerciseRoutine = ({ exercises, updateExerciseRoutine, exerciseRoutines }) => {

  const { id } = useParams()

  const currentExerciseRoutine = exerciseRoutines?.find(item => item.id === +id)

  const navigate = useNavigate()

  const [editExerciseRoutine, setEditExerciseRoutine] = useState({
    exercise_id: currentExerciseRoutine?.exercise_id,
    schedule_id: currentExerciseRoutine?.schedule_id,
    sets: currentExerciseRoutine?.sets,
    reps: currentExerciseRoutine?.reps,
    day: currentExerciseRoutine?.day,
    weight:currentExerciseRoutine?.weight,
  })

  const handleChange = (e) => {
    setEditExerciseRoutine({
      ...editExerciseRoutine,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    updateExerciseRoutine(editExerciseRoutine, id)
    navigate(`/exerciseroutines/${editExerciseRoutine?.schedule_id}`)
  }

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-[#7DAFC7] to-[#FFFFFF] min-h-screen">
      <h1 className="text-3xl text-white mt-5">Edit Exercise Routine</h1>

      <div className="w-full max-w-xs">
        <form className="p-8">
          <div className="mb-4">
            <label
              htmlFor="exercise_id"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Exercise
            </label>

            <select
              name="exercise_id"
              id="exercise_id"
              value={editExerciseRoutine?.exercise_id}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleChange}
            >
              {exercises?.map((ex, index) => (
                <option key={index} value={ex.id}>
                  {ex.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="weight"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Weight in lb
            </label>

            <input
              value={editExerciseRoutine?.weight}
              onChange={handleChange}
              name="weight"
              min={0}
              id="weight"
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></input>
          </div>

          <div className="mb-4">
            <label
              htmlFor="sets"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Number of Sets
            </label>

            <input
              required
              value={editExerciseRoutine?.sets}
              onChange={handleChange}
              name="sets"
              min={0}
              id="sets"
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></input>
          </div>

          <div className="mb-4">
            <label
              htmlFor="reps"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Number of Reps
            </label>

            <input
              value={editExerciseRoutine?.reps}
              onChange={handleChange}
              name="reps"
              min={0}
              id="reps"
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></input>
          </div>

          <div className="mb-4">
            <label
              htmlFor="day"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Day of the Week
            </label>

            <select
              value={editExerciseRoutine?.day}
              onChange={handleChange}
              name="day"
              id="day"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditExerciseRoutine
