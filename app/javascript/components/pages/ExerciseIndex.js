
import React, {useState} from "react";
import potato from "/app/assets/images/potato.jpg"
import { NavLink, useNavigate } from "react-router-dom"
import info from "/app/assets/images/info.png"


const ExerciseIndex = ({ exercises, logged_in, current_user }) => {
console.log(exercises);
  return (

    <div className=" bg-gradient-to-br from-[#7DAFC7] to-[#922C2C]  pr-2 min-h-screen gap-2 flex flex-col items-center">

      <h1 className="text-white text-2xl bg-opacity-50 bg-gray-500 px-5 rounded-2xl self-start ">Exercises</h1>

      {exercises?.map((exercise) => (

        <div key={exercise.id} 
        className="text-white items-center justify-center bg-opacity-50 bg-gray-500 rounded-2xl grid grid-cols-2">

          <div className="col-start-1 col-end-2 ">
            <img src={exercise.image} className="object-cover rounded-l-2xl h-48 w-64 " />
         </div>
          <div className="flex flex-col col-start-2 col-end-3 items-center justify-center">

            <h3>{exercise.name}</h3>

            <p>{exercise.category}</p>
            <p>{exercise.difficulty}</p>

            <NavLink
                to={`/exerciseshow/${exercise.id}`}
                className=" mt-2"
              >
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
  );
};

export default ExerciseIndex;
