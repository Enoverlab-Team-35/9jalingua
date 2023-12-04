import { React, useState } from "react";
import Image from "next/image";
import { BsCalendarDate } from "react-icons/bs";
import { IoMdTrophy } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export default function DashboardAchievement() {
  return (
    <div>
      <div>
        <div className="flex border border-1 rounded mt-6 pb-2">
          <BsCalendarDate className="mt-5 ml-4" />
          <h1 className="ml-2 mt-4 text-grays-900 font-semibold">
            My Achievements
          </h1>
        </div>
        <div className="flex ">
          {" "}
          <div className="">
            <IoMdTrophy className="fill-yellow-300 mt-3 " size="15.5rem" />
          </div>
          <div className="ml-28">
            <div className="flex mt-4">
              <img className="mr-5" src="Ruby.png" />
              <div className="mt-3">
                <h2>RUBY</h2>
                <p>Finish a course</p>
              </div>
            </div>
            <div className="flex mt-6">
              <img className="bg-greens-400 pl-3 pr-2 mr-5" src="Pearl.png" />
              <div>
                <h2 className="mt-3">PEARL</h2>
                <p>Complete a module</p>
              </div>
            </div>
            <div className="flex mt-6">
              <img className="bg-greens-400 pl-3 pr-2 mr-5" src="Diamond.png" />
              <div className="mt-3">
                <h2>DIAMOND</h2>
                <p>Maintain 5 day streak</p>
              </div>
            </div>
            <div>
              <span>
                Show all achievements{" "}
                <Image
                  src={"/svgs/chevron-down-black.svg"}
                  width={20}
                  height={20}
                  alt="drop down"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
