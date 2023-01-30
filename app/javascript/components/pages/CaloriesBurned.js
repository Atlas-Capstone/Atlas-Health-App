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
      <div className="flex flex-col items-center">
        <h1 className="text-center text-3xl font-mono font-bold pt-10">
          Calories Burned
        </h1>
        <p className="mt-3 mx-12">
          Input an activity, your weight, and the duration of the activity to
          get a rough calorie burned estimate. The search can be quite pedantic
          so if your activity doesn't surface at first try different words
          related tot he activity.
        </p>
      </div>
      <div className="flex flex-col items-center mt-5  gap-3">
        <form className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label htmlFor="activity">Input Activity</label>
            <input
              type="text"
              className="text-black rounded-full"
              name="activity"
              id="activity"
              onChange={(e) => {
                setActivity(e.target.value)
              }}
            />
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
            <h3 className="font-mono text-center underline font-bold text-xl ">
              Activities
            </h3>
            {data?.length < 1 && (
              <p className="text-2xl font-mono font-bold mt-3 mx-10">
                Sorry no result for this activity please try again with
                different wording, the a.i. is quite pedantic.
              </p>
            )}
            {data?.length > 0 &&
              data?.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-gray-400 bg-opacity-60 text-white p-8 flex flex-col items-center justify-center mt-2"
                >
                  <p className="font-bold text-lg">{item.name}</p>
                  <p>Calories Per Hour: {item.calories_per_hour} kcal</p>
                  <p>Duration: {item.duration_minutes} minutes</p>
                  <p>Total Calories: {item.total_calories} kcal</p>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CaloriesBurned
