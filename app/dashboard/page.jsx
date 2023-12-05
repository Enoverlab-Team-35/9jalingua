"use client";
import React, { useState } from "react";
import { BsFileEarmarkCheck } from "react-icons/bs";
import { BsCalendarDate } from "react-icons/bs";
import "react-circular-progressbar/dist/styles.css";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardStreaks from "../components/dashboardComponent/DashboardStreaks";
import Link from "next/link";
import DashboardCalendar from "../components/dashboardComponent/DashboardCalendar";
import DashboardTarget from "../components/dashboardComponent/DashboardTarget";
import DashboardRewards from "../components/dashboardComponent/DashboardRewards";

export default function Page() {
  return (
    <DashboardLayout>
      <div className="mt-14 bg-greens-200 text-white rounded-lg w-full px-8 md:ps-3 md:pe-9 pb-12 md:pb-8">

        <div className="flex items-center gap-[10px] text-xl font-bold py-8 md:py-4">
          <BsFileEarmarkCheck size={24} />
          <span> My Activity</span>
        </div>

        <div className="mt-14 flex flex-col md:flex-row md:items-center justify-between gap-10">
          <div>
            <h2 className=" font-bold mb-3 text-xl">
              Achieve your language learning goals
            </h2>
            <p className="mt-4">
              Embark on your language learning journey with us and turn your
              goals into achievements
            </p>
          </div>
          <button className="bg-blues-1100 font-bold text-white rounded-lg py-4 px-8 wfull text-xl ">
            Set Goals
          </button>
        </div>
      </div>

      {/* streak */}
      <div className="mt-10 flex flex-col items-start justify-between w-full lg:flex-row gap-9">
        <div className="w-full lg:w-2/3">
          <DashboardStreaks />
          <div className="mt-9 grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-9" >
            <DashboardTarget />
            <DashboardRewards />
          </div>
        </div>

        <div className=" w-full md:w-1/3 md:max-w-full lg:mt-0 mt-10">
          <DashboardCalendar />
        </div>
      </div>

      <div>
        <div className="flex border border-1 rounded mt-6 pb-2">
          <BsCalendarDate className="mt-5 ml-4" />
          <h1 className="ml-2 mt-4 text-grays-900 font-semibold">
            My Achievements
          </h1>
        </div>
        <div className="border border-1 mt-1 pt-20 pb-20 mb-10">
          <p className="text-center">
            Continue your learning journey to unlock your badges
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
