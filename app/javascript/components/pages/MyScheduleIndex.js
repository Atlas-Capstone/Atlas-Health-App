
import React from "react";
import potato from "/app/assets/images/potato.jpg"
import { NavLink } from "react-router-dom";



const MyScheduleIndex = ({ schedules, logged_in, current_user, deleteSchedule }) => {


  return (
    <div className="-mt-[100px] bg-gradient-to-br from-cyan-500 to-white  pr-2 min-h-screen gap-2 flex flex-col items-center">

      <h1 className="text-white pt-[100px] text-2xl">Schedules</h1>

      {schedules?.filter(item => item.user_id === current_user?.id).map((schedule) => (

        <div 
          key={schedule.id}      
          className="text-white items-center justify-center bg-gray-500 bg-opacity-50 rounded-2xl grid grid-cols-2">

          <div className="col-start-1 col-end-2">
            <img src={potato}/>
          </div>
          
          <div className="flex flex-col col-start-2 col-end-3  items-center justify-center">

            <h3>{schedule.name}</h3>

            <p>Days Per Week: {schedule.days_per_week}</p>


            <NavLink to={`/exerciseroutines/${schedule.id}`}>
              See details
            </NavLink>

            <NavLink to={`/scheduleedit/${schedule.id}`}>
              <button name="submit" className="rounded-full bg-gray-400 bg-opacity-50 mt-5 p-4 text-white text-xl">Edit</button>
            </NavLink>

            <NavLink to="/myschedulesindex">
              <button onClick={() => deleteSchedule(`${schedule.id}`)} name="submit" className="rounded-full bg-gray-400 bg-opacity-50 mt-5 p-4 text-white text-xl">Delete</button>
            </NavLink>


          </div>
        </div>
      ))}
    </div>
  );
};

export default MyScheduleIndex;

