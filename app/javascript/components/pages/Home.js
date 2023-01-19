import React from "react";
import logo from '/app/assets/images/logo.png'


const Home = ({sign_in_route}) => {
  return (
    <div className="h-screen bg-[#051821] flex flex-col items-center">
      <img src={logo} alt="logo" height={300} width={300} />
      <a href={sign_in_route}>
        <button className="bg-[#5DDD80] rounded-full text-6xl italic font-extrabold w-[320px] h-[105px]">
          BEGIN
        </button>
      </a>
    </div>
  )
};

export default Home;
