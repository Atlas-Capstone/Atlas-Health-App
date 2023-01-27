import React, { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

const NewSchedule = ({ createSchedule, logged_in, current_user }) => {
  const navigate = useNavigate()
  const [newSchedule, setNewSchedule] = useState({
    name: "",
    days_per_week: "",
    user_id: current_user?.id,
  })
  const handleChange = (e) => {
    setNewSchedule({ ...newSchedule, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    newSchedule.user_id = current_user.id
    createSchedule(newSchedule)
    navigate("/myschedulesindex")
  }
  if (logged_in === true) {
    return (
      <form className="min-h-screen bg-gradient-to-br from-[#7DAFC7] to-white flex flex-col items-center font-mono italic">
        <h2 className="text-white text-4xl mb-8 mt-10">Schedule</h2>
        <label htmlFor="name" className="block">
          <span className="block text-sm font-medium text-slate-700 ">
            Schedule Name
          </span>
          <input
            type="text"
            name="name"
            className="block text-sm font-md leading-5 text-[#4F4F4F] rounded-full mb-10"
            onChange={handleChange}
            value={newSchedule.name}
          />
        </label>

        <label htmlFor="days_per_week" className="block">
          <span className="block text-sm font-medium text-slate-700">
            Days Per Week
          </span>
          <input
            type="text"
            name="days_per_week"
            className="block text-sm font-md leading-5 text-[#4F4F4F] rounded-full"
            onChange={handleChange}
            value={newSchedule.days_of_week}
          />
        </label>

        <button
          onClick={handleSubmit}
          name="submit"
          className="rounded-full bg-gray-400 bg-opacity-50 mt-5 p-4 text-white text-xl"
        >
          Create
        </button>

        <NavLink to={"/myschedulesindex"}>
          <button
            name="submit"
            className="rounded-full bg-gray-400 bg-opacity-50 mt-5 p-4 text-white text-xl"
          >
            Cancel
          </button>
        </NavLink>
      </form>
    )
  }
}

export default NewSchedule
