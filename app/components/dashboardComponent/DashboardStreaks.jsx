"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineLightBulb } from "react-icons/hi";
import ProgressBar from "@ramonak/react-progress-bar";

export default function DashboardStreaks() {
  const [percentage, setPercentage] = useState(0);
  const [streakdays, setStreakDays] = useState(0);
  return (
    <div className="border border-grays-200 rounded-lg shadow-sm pb-10 md:pb-3">
      <div className="flex items-center py-2 px-3 gap-[10px] border-b shadow-sm">
        <HiOutlineLightBulb size={24} />
        <h1 className="text-grays-900 text-xl font-bold">Streak count</h1>
      </div>
      <p className="mt-6 text-grays-800 px-4">
        Days in a row that you have made progress on
      </p>

      <div className="mt-11 px-4">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <ProgressBar
            className="progressiveBarContainer flex-1 max-w-[550px] w-full rounded-full"
            customLabel={" "}
            completed={50}
          />
          <div className="flex gap-6 items-center">
            <p className="text-grays-400">{streakdays} days</p>
            <p className="text-grays-900 text-xl"> Longest</p>
          </div>
        </div>

        <div className="mt-9 md:mt-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <ProgressBar
            className="progressiveBarContainer flex-1 max-w-[550px] w-full rounded-full"
            customLabel={" "}
            completed={50}
          />
          <div className="flex gap-6 items-center">
            <p className="text-grays-400">{streakdays} days</p>
            <p className="text-grays-900 text-xl"> Current</p>
          </div>
        </div>
      </div>

      <div className="px-4 flex justify-between md:items-center flex-col md:flex-row gap-9 md:gap-4 mt-10">
        <p className="text-grays-800">
          Take a lesson to increase your streak days
        </p>
        <div className="ms-auto">
          <Link className=" text-blues-1100 font-bold" href="#">
            Take a lesson →
          </Link>
        </div>
      </div>
    </div>
  );
}
