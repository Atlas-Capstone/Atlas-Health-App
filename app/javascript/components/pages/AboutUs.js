import React, { useState } from "react"

import { NavLink, useNavigate } from "react-router-dom"

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-[#7DAFC7] to-white  pr-2 min-h-screen gap-2 flex flex-col items-center">
      <h1 className="text-white text-4xl my-6">About Us</h1>

      <div className="text-white items-center justify-center  flex flex-col gap-5 md:grid md:grid-cols-2">
          <div className=" grid grid-cols-2 bg-opacity-50 bg-gray-500  rounded-2xl">
            <div className="px-3 my-6 flex items-center justify-center">
              <img
              className="rounded-full "
              src="https://ca.slack-edge.com/T04B40L2C-U045268SUBH-dbf48859271d-512"
              />
            </div>
            <div className="flex flex-col items-center justify-center pr-5 max-w-md">
              <h2 className="font-semibold">Project Manager - Matt Krug</h2>

              <h3 className="text-sm lg:text-lg">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
              </h3>
            </div>
          </div>
          <div className=" grid grid-cols-2 bg-opacity-50 bg-gray-500  rounded-2xl ">
            <div className="px-3 my-6 flex items-center justify-center">
              <img
              className="rounded-full "
              src="https://ca.slack-edge.com/T04B40L2C-U045E0K10QN-ff63b07cc2ba-512"
              />
            </div>
            <div className="flex flex-col items-center justify-center pr-5 max-w-md">
              <h2 className="font-semibold">Tech Lead - Garrett Greer</h2>

              <h3 className="text-sm lg:text-lg">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
              </h3>
            </div>
          </div>
          <div className=" grid grid-cols-2 bg-opacity-50 bg-gray-500  rounded-2xl">
            <div className="px-3 my-6 flex items-center justify-center">
              <img
              className="rounded-full "
              src="https://ca.slack-edge.com/T04B40L2C-U041PN36H6F-cfc55014a77a-512"
              />
            </div>
            <div className="flex flex-col items-center justify-center pr-5 max-w-md">
              <h2 className="font-semibold">Design Lead - Zeke Perez</h2>

              <h3 className="text-sm lg:text-lg">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
              </h3>
            </div>
          </div>
          <div className=" grid grid-cols-2 bg-opacity-50 bg-gray-500  rounded-2xl ">
            <div className="px-3 my-6 flex items-center justify-center">
              <img
              className="rounded-full "
              src="https://ca.slack-edge.com/T04B40L2C-U0418KLUKP1-60a9aa988627-512"
              />
            </div>
            <div className="flex flex-col items-center justify-center pr-5 max-w-md">
              <h2 className="font-semibold">Product Manager - Frank Burgers</h2>

              <h3 className="text-sm lg:text-lg">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
              </h3>
            </div>
          </div>

      </div>
    </div>
  )
}

export default AboutUs

