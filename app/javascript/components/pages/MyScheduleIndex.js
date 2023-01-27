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
    <div className=" bg-gradient-to-br from-[#7DAFC7] to-white  pr-2 min-h-screen gap-2 flex flex-col items-center">
      <h1 className="text-white text-2xl lg:text-5xl my-5">Schedules</h1>

      {schedules
        ?.filter((item) => item.user_id === current_user?.id)
        .map((schedule) => (
          <div
            key={schedule.id}
            className="text-white items-center justify-center bg-gray-500 bg-opacity-50 rounded-2xl grid grid-cols-2"
          >
            <div className="col-start-1 col-end-2">
              <img src={potato} />
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
              <div className="flex justify-around items-center gap-2 mt-2">
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
                    onClick={() => deleteSchedule(`${schedule.id}`)}
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
    </div>
  )
}

export default MyScheduleIndex
