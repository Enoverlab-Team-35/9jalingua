"use client";
import React, { useState } from "react";
import { BsFileEarmarkCheck } from "react-icons/bs";
import "react-circular-progressbar/dist/styles.css";
import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardStreaks from "../../components/dashboardComponent/DashboardStreaks";
import Link from "next/link";
import DashboardCalendar from "../../components/dashboardComponent/DashboardCalendar";
import DashboardTarget from "../../components/dashboardComponent/DashboardTarget";
import DashboardRewards from "../../components/dashboardComponent/DashboardRewards";
import DashboardAchievement from "@/app/components/dashboardComponent/DashboardAchievement";

export default function Page() {
  return (
    <DashboardLayout>
      <div className=" bg-greens-200 border rounded-lg w-full">
        <div className="mb-10 ml-3 mt-3 ">
          {" "}
          <div className=" flex text-white font-bold">
            {" "}
            <BsFileEarmarkCheck className="mt-2" />
            <span className="ml-2"> My Activity</span>
          </div>
        </div>
        <div className="flex items-center justify-between w-full mt-11 max-md:max-w-full max-md:flex-wrap max-md:mt-10 ml-3 pt-2 pb-2">
          <div className="text-white mb-6 ">
            {" "}
            <h2 className=" font-semibold mb-3 text-base">
              Increase your word count to reach your language mastery target
            </h2>
            <p className="font-extralight text-sm max-w-sm md:max-w-fit">
              Increase your word count to reach your language mastery target
            </p>
          </div>

          <button className="bg-blues-1100 border-blues-1100 font-bold text-white mr-10 border rounded pt-3 pb-3 pl-1 pr-1 mt-2 mb-4 md:max-w-[130px] w-full ">
            Continue Learning
          </button>
        </div>
      </div>
      {/* //streak */}
      <div className="flex flex-col items-start justify-between w-full lg:flex-row gap-9">
        <div className="w-full md:w-2/3">
          <DashboardStreaks />
          <div className="md:flex flex-col justify-between lg:flex-row gap-2 md:w-full">
            {" "}
            <DashboardTarget />
            <DashboardRewards />
          </div>
        </div>
        <div className=" w-full md:w-1/3 md:max-w-full ">
          <DashboardCalendar />
        </div>
      </div>

      <DashboardAchievement />
    </DashboardLayout>
  );
}
