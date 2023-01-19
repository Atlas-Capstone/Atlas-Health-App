import React from "react";

const ScheduleIndex = ({ schedules, logged_in, current_user }) => {
  return (
    <div className="h-screen bg-[#051821] flex flex-col items-center">
      <h1 className="text-white text-2xl">Routines</h1>
      {schedules?.map((schedule) => (
        <div className="text-white">{schedule.name}</div>
      ))}
    </div>
  );
};

export default ScheduleIndex;
