import React from "react";
import potato from "/app/assets/images/potato.jpg"
const ScheduleIndex = ({ schedules, logged_in, current_user }) => {
  return (
    <div className="-m-[100px] bg-gradient-to-br from-[#7DAFC7] to-white  pr-2 min-h-screen gap-2 flex flex-col items-center">
      <h1 className="text-white text-2xl pt-[100px]">Routines</h1>
      {schedules?.map((schedule) => (
        <div key={schedule.id}      className="text-white items-center justify-center bg-opacity-50 bg-gray-500 rounded-2xl grid grid-cols-2">
          <div className="col-start-1 col-end-2">
            <img src={potato}/>
          </div>
          
          <div className="flex flex-col col-start-2 col-end-3 items-center justify-center">
            <h3>{schedule.name}</h3>
            <p>Days Per Week: {schedule.days_per_week}</p>
          </div>
        
        </div>
      ))}
    </div>
  );
};

export default ScheduleIndex;
