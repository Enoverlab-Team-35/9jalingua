"use client";
import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { BsFileEarmarkCheck } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { FiGift } from "react-icons/fi";
import { BsCalendarDate } from "react-icons/bs";
import "react-circular-progressbar/dist/styles.css";

import DashboardLayout from "../layouts/DashboardLayout";
import DashboardStreaks from "../components/DashboardStreaks";
import Link from "next/link";
import DashboardCalendar from "../components/DashboardCalendar";

export default function Page() {
  const [percentage, setPercentage] = useState(15);
  return (
    <DashboardLayout>
      <div className="bg-greens-200 border rounded-lg">
        <div className="mb-10 ml-3 mt-3 ">
          {" "}
          <div className=" flex text-white font-bold">
            {" "}
            <BsFileEarmarkCheck className="mt-1" />
            <span className="ml-2"> My Activity</span>
          </div>
        </div>
        <div className="flex justify-between mb-8 ">
          <div className="text-white ml-3 ">
            {" "}
            <h2 className=" font-semibold mb-3 text-base">
              Achieve your language learning goals
            </h2>
            <p className="font-extralight text-sm">
              Embark on your language learning journey with us and turn your
              goals into achievements
            </p>
          </div>

          <button className="bg-blues-1100 border-blues-1100 font-bold text-white mr-10 border rounded pt-1 pb-1 pl-6 pr-6">
            Set Goals
          </button>
        </div>
      </div>

      {/* //streak */}
      <div className="flex">
        <div className="w-2/3">
          <DashboardStreaks />

          <div className="flex">
            <div className="bg-greens-1000 mt-10 border rounded  md:w-1/2 ">
              <div className=" flex mb-2 font-semibold">
                {" "}
                <TbTargetArrow className="mt-5 ml-4" />
                <p className="ml-2 mt-4">Vocabulary Mastery Target</p>
              </div>

              <hr></hr>
              <div className="ml-6 mt-6 mb-6 text-sm font-thin">
                <span className="font-bold text-base">0</span>{" "}
                <span className="text-grays-800">new words learned</span>
              </div>
              <div className="flex">
                {" "}
                <div className=" w-32 ml-6 mb-3">
                  {" "}
                  <CircularProgressbar value={percentage} strokeWidth={20} />
                </div>
                <div className="ml-2  mt-16">
                  {" "}
                  <span className="font-bold">{`${percentage}%`} </span>
                  <span className="text-xs text-grays-800 ">
                    of weekly goal achieved
                  </span>
                </div>
              </div>
            </div>

            <div className=" bg-blues-200 mt-10 border rounded ml-5  md:w-1/2">
              <div className="flex">
                <FiGift className="mt-5 ml-4" />
                <h1 className="ml-2 mt-4 mb-2 text-grays-900 font-semibold">
                  Rewards
                </h1>
              </div>
              <hr></hr>
              <div className="ml-4 mt-8 text-grays-900 leading-10">
                <p>
                  Get rewards when you share your link with friends to join
                  9jaLingua
                </p>

                <Link
                  className=" flex justify-end text-blue-800 mr-4 mt-6"
                  href="#"
                >
                  Share Link →
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3">
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
