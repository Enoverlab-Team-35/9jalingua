"use client"

import { React, useState } from "react";
import Image from "next/image";
import { BsCalendarDate } from "react-icons/bs";
import { IoMdTrophy } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { AchievementsSVG, DiamondSVG, PearlSVG, RubySVG, TrophySVG } from "../SvgsComponent";
import ProgressBar from "@ramonak/react-progress-bar";
import { useAppContext } from "@/app/context";

export default function DashboardAchievement() {
  const { streakdays } = useAppContext()

  return (
    <div>
      <div className="mt-6 flex px-6 sm:px-3 sm:py-3 py-4 gap-2 items-center outline outline-1 outline-grays-200 rounded-t-lg">
        <AchievementsSVG />
        <h1 className="text-grays-900 font-bold text-xl">
          My Achievements
        </h1>
      </div>
      <div className="outline outline-1 outline-grays-200 mt-1 py-4 px-6 sm:px-3">
        {/* conditions */}
        {streakdays > 0 ? (
          <div className="pt-16 sm:pt-0 flex flex-col sm:flex-row sm:items-center gap-20 sm:gap-10 justify-evenly">
            <TrophySVG />
            <div className="w-full max-w-[630px] grid gap-[30px]">
              {/* Ruby */}
              <div className="flex items-center gap-[26px]">
                <div className="w-[100px] aspect-square rounded-lg flex justify-center items-center bg-blues-200">
                  <RubySVG />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-grays-900">Ruby</h3>
                  <p className="mt-1 text-grays-800">Finish a Course</p>
                  <div className="mt-2 flex items-center gap-3">
                    <ProgressBar
                      className="progressiveBarContainer w-full rounded-full"
                      customLabel={" "}
                      completed={40}
                    />
                    <span className="font-bold text-grays-900">
                      40%
                    </span>
                  </div>
                </div>
              </div>
              {/* Pearl */}
              <div className="flex items-center gap-[26px]">
                <div className="w-[100px] aspect-square rounded-lg flex justify-center items-center bg-greens-300">
                  <PearlSVG />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-grays-900">Pearl</h3>
                  <p className="mt-1 text-grays-800">Learn for 1hour straight</p>
                  <div className="mt-2 flex items-center gap-3">
                    <ProgressBar
                      className="progressiveBarContainer w-full rounded-full"
                      customLabel={" "}
                      completed={20}
                    />
                    <span className="font-bold text-grays-900">
                      20%
                    </span>
                  </div>
                </div>
              </div>
              {/* Diamond */}
              <div className="flex items-center gap-[26px]">
                <div className="w-[100px] aspect-square rounded-lg flex justify-center items-center bg-greens-300">
                  <DiamondSVG />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-grays-900">Diamond</h3>
                  <p className="mt-1 text-grays-800">Maintain 5 day streak</p>
                  <div className="mt-2 flex items-center gap-3">
                    <ProgressBar
                      className="progressiveBarContainer w-full rounded-full"
                      customLabel={" "}
                      completed={(streakdays / 5) * 100}
                    />
                    <span className="font-bold text-grays-900">
                      {(streakdays / 5) * 100}%
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ) : (
          <p className="sm:text-center text-grays-800 font-bold text-xl py-16">
            Continue your learning journey to unlock your badges
          </p>
        )}
      </div>
    </div>
  );
}
