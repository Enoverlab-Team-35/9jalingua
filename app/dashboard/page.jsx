"use client";

import React from "react";
import { BsFileEarmarkCheck } from "react-icons/bs";
import { BsCalendarDate } from "react-icons/bs";
import "react-circular-progressbar/dist/styles.css";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardStreaks from "../components/dashboardComponent/DashboardStreaks";
import DashboardCalendar from "../components/dashboardComponent/DashboardCalendar";
import DashboardTarget from "../components/dashboardComponent/DashboardTarget";
import DashboardRewards from "../components/dashboardComponent/DashboardRewards";
import { useRouter } from "next/navigation";
import { useAppContext } from "../context";
import DashboardAchievement from "../components/dashboardComponent/DashboardAchievement";

export default function Page() {
  const { topics } = useAppContext()
  const router = useRouter()

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
              {topics.reduce((total, obj) => total + obj.progress, 0) > 0 ?
                `Increase your word count to reach your language mastery target`
                : `Embark on your language learning journey with us and turn your goals into achievements`
              }
            </p>
          </div>
          <button
            onClick={() => router.push(`/interactive-lessons`)}
            className="bg-blues-1100 font-bold text-white rounded-lg py-4 px-8 wfull text-xl "
          >
            {topics.reduce((total, obj) => total + obj.progress, 0) > 0 ?
              "Continue Learning"
              : "Set Goals"
            }
          </button>
        </div>
      </div>

      {/* streak */}
      <div className="mt-10 flex flex-col items-start justify-between w-full xl:flex-row gap-10">
        <div className="w-full xl:w-2/3">
          <DashboardStreaks />
          <div className="mt-9 grid sm:grid-cols-2 xl:grid-cols-2 gap-9" >
            <DashboardTarget />
            <DashboardRewards />
          </div>
        </div>

        <div className=" w-full xl:w-1/3 xl:mt-0">
          <DashboardCalendar />
        </div>
      </div>
      {/* To Be refactor */}
      <DashboardAchievement />

    </DashboardLayout>
  );
}
