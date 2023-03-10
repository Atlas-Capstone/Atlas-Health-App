import React, { useState } from "react"
import potato from "/app/assets/images/potato.jpg"
import { NavLink, useNavigate } from "react-router-dom"
import info from "/app/assets/images/info.png"

const ScheduleIndex = ({ schedules, logged_in, current_user }) => {
  return (
    <div className="bg-gradient-to-br from-[#7DAFC7] to-white  pr-2 min-h-screen gap-2 flex flex-col items-center">
      <h1 className="text-white text-2xl my-6">Schedules</h1>

      {schedules?.map((schedule, index) => (
        <div
          key={schedule.id}
          className="text-white items-center justify-center bg-opacity-50 bg-gray-500 rounded-2xl grid grid-cols-2"
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
          <div className="flex flex-col col-start-2 col-end-3 items-center justify-center">
            <h3>{schedule.name}</h3>

            <p>Days Per Week: {schedule.days_per_week}</p>

            <NavLink to={`/exerciseroutines/${schedule.id}`} className=" mt-2">
              <img
                src={info}
                alt="info"
                className="hover:scale-110 hover:shadow-lg rounded-full"
              />
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ScheduleIndex
