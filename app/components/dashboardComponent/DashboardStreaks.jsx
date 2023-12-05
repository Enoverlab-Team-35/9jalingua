"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineLightBulb } from "react-icons/hi";

export default function DashboardStreaks() {
  const [percentage, setPercentage] = useState(0);
  const [streakdays, setStreakDays] = useState(0);
  return (
    <div className="border border-grays-200 rounded-lg">
      <div className="flex mt-2 mb-2 font-semibold ml-6">
        <HiOutlineLightBulb size={24} />
        <h1 className="ml-1">Streak count</h1>
      </div>
      <hr></hr>
      <div className="mt-6 mb-6 ml-6 text-grays-800">
        <p>Days in a row that you have made progress on</p>
      </div>

      <div className=" ">
        {" "}
        <div className=" flex ml-4 mr-4 items-center mt-11 max-md:flex-wrap max-md:mt-10">
          <hr className="pt-2 border-2 border-grays-100 bg-gray-100 rounded pr-96 mb-8 mt-1 max-md:w-full "></hr>
          <p className="ml-4 text-grays-400 mb-5">{streakdays} days</p>
          <p className="text-grays-900 ml-4 mb-5"> Longest</p>
        </div>
        <div className=" flex ml-4 mr-4 items-center max-md:flex-wrap max-md:mt-10 ml-3">
          <hr className="pt-2 border-2 border-grays-100 bg-gray-100 max-md:w-full rounded pr-96"></hr>
          <p className="ml-4 text-grays-400">{streakdays} days</p>
          <p className="text-grays-900 ml-4"> Current</p>
        </div>
      </div>

      <div className=" flex justify-between mt-10 mb-2 max-md:flex-wrap max-md:mt-10">
        <span className="ml-4 font-extralight text-sm text-grays-800 max-md:w-full ">
          Take a lesson to increase your streak days
        </span>
        <span>
          {" "}
          <Link className="text-sm text-blues-1100 ml-56 mr-12" href="#">
            Take a lesson →
          </Link>
        </span>
      </div>
    </div>
  );
}
