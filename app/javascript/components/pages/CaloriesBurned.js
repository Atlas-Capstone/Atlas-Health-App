import React, { useState } from "react"

const CaloriesBurned = ({ current_user }) => {
  const [activity, setActivity] = useState()
  const [data, setData] = useState()
  const [weight, setWeight] = useState(current_user?.weight)
  const [duration, setDuration] = useState()

  const activityArray = [
    "walk",
    "run",
    "cycling",
    "pushups",
    "dancing",
    "stretching",
  ]

  const apiKey = process.env.REACT_APP_NINJA_API
  async function fetchActivity(acts, wei = "", dur = "") {
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/caloriesburned?activity=${acts}&weight=${wei}&duration=${dur}`,
        {
          headers: {
            "X-Api-Key": apiKey,
            "Content-Type": "application/json",
          },
        }
      )
      const data = await response.json()
      console.log(data)
      setData(data)
    } catch (error) {
      console.error(error)
    }
  }
  function handleSubmit() {
    fetchActivity(activity, weight, duration)
  }
  return (
    <div className="bg-gradient-to-br from-[#7DAFC7] min-h-screen to-white p-10 text-white">
      <h1 className="text-center text-3xl font-mono font-bold pt-10">
        Calories Burned
      </h1>
      <div className="flex flex-col items-center mt-5  gap-3">
        <form className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label htmlFor="activity">Input Activity</label>

            <select
              name="activity"
              id="activity"
              onChange={(e) => {
                setActivity(e.target.value)
              }}
              className="text-black rounded-full"
            >
              <option value="">Select Please</option>
              {activityArray.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="weight">Current Weight in lb</label>
            <input
              type="number"
              name="weight"
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value)
              }}
              className="text-black rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="duration">Duration in Minutes</label>
            <input
              className="text-black rounded-full"
              type="number"
              name="duration"
              onChange={(e) => {
                setDuration(e.target.value)
              }}
            />
          </div>
          <button
            className="bg-teal-800 text-white p-3 rounded-full mt-3 hover:shadow-xl hover:bg-teal-600"
            type="button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
        {data && (
          <div>
            <h3 className="font-mono underline font-bold text-xl ">
              Activities
            </h3>
            {data?.map((item, index) => (
              <div
                key={index}
                className="rounded-full bg-gray-400 bg-opacity-60 text-white p-8 flex flex-col items-center justify-center mt-2"
              >
                <p className="font-bold text-lg">{item.name}</p>
                <p>Calories Per Hour: {item.calories_per_hour}</p>
                <p>Duration: {item.duration_minutes}</p>
                <p>Total Calories: {item.total_calories}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CaloriesBurned
