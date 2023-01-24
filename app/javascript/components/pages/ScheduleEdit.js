import React, {useState} from 'react'
import { NavLink, useNavigate, useParams } from "react-router-dom"



    const ScheduleEdit = ({ schedules, updateSchedule, logged_in, current_user }) => {
        if (!schedules)return <div>Loading</div>
        const navigate = useNavigate()
        const { id } = useParams()
        let currentSchedule = schedules?.find((schedule) => schedule.id === +id)
        const [editSchedule, setEditSchedule] = useState({
          name: currentSchedule?.name,
          days_per_week: currentSchedule?.days_per_week,
          user_id: currentSchedule?.user_id
        })
        const handleChange = (e) => {
          setEditSchedule({ ...editSchedule, [e.target.name]: e.target.value })
        }
        const handleSubmit = () => {
          updateSchedule(editSchedule, currentSchedule.id)
          navigate("/myschedulesindex")
        }
        if (logged_in === true) {
          return (
            <form className='min-h-screen bg-gradient-to-br from-[#7DAFC7] to-white flex flex-col items-center font-mono italic'>
            <h2 class= 'text-white text-4xl mb-8 mt-10'>Schedule</h2>
            <label htmlFor="name" className="block">
              <span className="block text-sm font-medium text-slate-700 ">Name</span>
              <input type="text" name="name" className="block text-sm font-md leading-5 text-[#4F4F4F] rounded-full mb-10" onChange={handleChange} value={editSchedule?.name} />
            </label>
            
            <label htmlFor="days_per_week" className="block">
              <span className="block text-sm font-medium text-slate-700">Days Per Week</span>
              <input type="text" name="days_per_week" className="block text-sm font-md leading-5 text-[#4F4F4F] rounded-full" onChange={handleChange} value={editSchedule?.days_per_week} />
            </label>
        
            <NavLink to={'/myschedulesindex'}>
            <button onClick={handleSubmit} name="submit" className="rounded-full bg-gray-400 bg-opacity-50 mt-5 p-4 text-white text-xl">Create</button>
            </NavLink>
            <NavLink to={'/myschedulesindex'}>
            <button name="submit" className="rounded-full bg-gray-400 bg-opacity-50 mt-5 p-4 text-white text-xl">Cancel</button>
            </NavLink>
          </form>
        )
      } 
     }

export default ScheduleEdit