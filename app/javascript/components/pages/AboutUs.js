import React, { useState } from "react"

import { NavLink, useNavigate } from "react-router-dom"

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-[#7DAFC7] to-white  pr-2 min-h-screen gap-2 flex flex-col items-center pb-16">
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
              Matt is highly organized and a communicative team player, with a
              passion for ensuring smooth and efficient workflow. He is
              responsible for keeping track of who is working on what, and
              making sure that developers are assigned to the correct tasks.
              Matt is the main point of contact for notifications to various
              stakeholders when project milestones are submitted for review.
              Overall, his goal is to contribute to a productive and successful
              team effort.
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
              Garrett is a technical professional with a deep understanding of
              the requirements and technical needs of projects. He is
              responsible for overseeing GitHub and ensuring that all code is
              properly merged and organized. In addition, he stays proactive and
              keeps the team informed of any blockers or challenges that may
              arise, bringing them to the attention of the stakeholders during
              progress reviews.
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
              Zeke is a UI/UX professional with extensive experience in
              designing and developing user-friendly applications. He possesses
              strong understanding of the UI/UX needs of applications, and
              dedicated to ensuring that the applications provide an intuitive
              and engaging user experience. Zeke is responsible for overseeing
              the wireframes, color schemes, and branding implementation to
              ensure consistency and coherence throughout the application.
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
              Frank is a skilled manager with a track record of effectively
              leading teams and ensuring smooth project delivery. His focus is
              on providing support to the team and adept at managing
              conversations around large changes to the application. Frank has a
              strong attention to detail, and I ensure that the product
              documentation contains all relevant information to keep the team
              and stakeholders informed.
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
