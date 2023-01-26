import React from 'react'
import bar from "/app/assets/images/bar.png"

const NotFound = () => {
  return (

    <div className="bg-gradient-to-br font-sans font-semibold italic from-[#CD8A4D] to-[#922C2C] pr-2 min-h-screen gap-2 flex flex-col items-center">  

    <h1 className="text-9xl  text-white">404</h1>
    
    <img src={bar} className="-m-20" />

    <p className="text-4xl text-white">Oops!</p>
    <p className="text-4xl text-white">No workouts here</p>
    <p className="text-4xl text-white">Head back to the gym</p>


    </div>
  )
}

export default NotFound