import React, { useState } from "react"

import hamburger from "/app/assets/images/hamburger.png"

import { NavLink } from "react-router-dom"

// End imports
// Begin Header definition

const Header = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <nav className="lg:py-4 flex items-center justify-between flex-wrap bg-[#051821] px-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6"></div>

      <div className="block lg:hidden">
        <button
          onClick={() => {
            setMenuVisible(!menuVisible)
          }}
          className="flex items-center px-3 py-2  text-teal-200 "
        >
          <img src={hamburger} alt="hamburger" height={50} width={50}></img>
        </button>
      </div>

      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto text-right pb-3 h-auto  ${
          !menuVisible
            ? "h-0 overflow-hidden translate-y-full transition duration-2000 ease-in-out"
            : "translate-y-0 transition duration-2000 ease-in-out"
        }`}
      >
        <div className="text-sm lg:flex-grow ">
          <NavLink
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Home
          </NavLink>
          {logged_in && (
            <>
              <a
                href={sign_out_route}
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Sign Out
              </a>
              <NavLink
                to="/myschedulesindex"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                My Schedules
              </NavLink>
              <NavLink
                to="/newschedule"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                New Schedule
              </NavLink>
              <NavLink
                to="/newsapi"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Fitness News
              </NavLink>
            </>
          )}

          {!logged_in && (
            <>
              <a
                href={sign_in_route}
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Sign In
              </a>
              <a
                href={new_user_route}
                className="block mt-4 mr-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
              >
                Sign Up
              </a>
            </>
          )}
          <NavLink
            to="/schedulesindex"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            All Schedules
          </NavLink>

          <NavLink
            to="/aboutus"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            About Us
          </NavLink>

          <NavLink
            to="/exercisesindex"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            All Exercises
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Header
