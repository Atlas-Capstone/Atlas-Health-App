import React from "react"
import potato from "/app/assets/images/potato.jpg"
import { NavLink } from "react-router-dom"
import info from "/app/assets/images/info.png"

const MyScheduleIndex = ({
  schedules,
  logged_in,
  current_user,
  deleteSchedule,
}) => {
  return (
    <div className=" bg-gradient-to-br from-[#7DAFC7] to-white   min-h-screen gap-2 flex flex-col items-center ">
      <h1 className="text-white text-2xl lg:text-5xl font-mono my-5">
        Schedules
      </h1>
      <p className="text-white font-mono mx-10 mb-8">
        Here you can create a new schedule which will allow you to create
        exercise routines.
      </p>
      {schedules
        ?.filter((item) => item.user_id === current_user?.id)
        .map((schedule, index) => (
          <div
            key={schedule.id}
            className="text-white items-center justify-center bg-gray-500 bg-opacity-50 rounded-2xl grid grid-cols-2"
          >
            <div className="col-start-1 col-end-2">
              <img
                src={
                  index % 2 == 0
                    ? potato
                    : "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                }
              />
            </div>

            <div className="flex flex-col col-start-2 col-end-3  items-center justify-center">
              <h3>{schedule.name}</h3>

              <p>Days Per Week: {schedule.days_per_week}</p>

              <NavLink
                to={`/exerciseroutines/${schedule.id}`}
                className=" mt-2"
              >
                <img
                  src={info}
                  alt="info"
                  className="hover:scale-110 hover:shadow-lg rounded-full"
                />
              </NavLink>
              <div className="flex justify-around items-center gap-2 my-2">
                <NavLink to={`/scheduleedit/${schedule.id}`}>
                  <button
                    name="submit"
                    className="rounded-full bg-gray-700 hover:bg-yellow-600 bg-opacity-50  px-2 py-1 text-white text-l"
                  >
                    Edit
                  </button>
                </NavLink>
                <NavLink to="/myschedulesindex">
                  <button
                    onClick={() => deleteSchedule(schedule.id)}
                    name="submit"
                    className="rounded-full bg-gray-700 hover:bg-red-700 bg-opacity-50  px-2 py-1 text-white text-l"
                  >
                    Delete
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      <NavLink
        className="bg-gray-400 text-white px-3 py-2 rounded-full mt-6 hover:scale-110 hover:shadow-lg"
        to="/newschedule"
      >
        Create New Schedule
      </NavLink>
    </div>
  )
}

export default MyScheduleIndex
