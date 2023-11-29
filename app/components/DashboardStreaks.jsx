import React from "react";
import Link from "next/link";
import { HiOutlineLightBulb } from "react-icons/hi";

export default function DashboardStreaks() {
  return (
    <div>
      <div className="border-2 border-grays-200 rounded mt-10 ">
        <div className="flex mt-2 mb-2 font-semibold ml-6">
          <HiOutlineLightBulb className="mt-1" />
          <h1 className="ml-1">Streak count</h1>
        </div>
        <hr></hr>
        <div className="mt-6 mb-6 ml-6 text-grays-800">
          <p>Days in a row that you have made progress on</p>
        </div>
        <div className="flex">
          <div className="ml-4 ">
            {" "}
            <hr className="pt-2 border-2 border-grays-100 bg-gray-100 rounded pr-96 mb-8 mt-1"></hr>
            <hr className="pt-2 border-2 border-grays-100 bg-gray-100  rounded pr-96"></hr>
          </div>
          <div className="flex">
            <div className="ml-4 text-grays-400">
              {" "}
              <p className="mb-5">0 days</p>
              <p>0 days</p>
            </div>
            <div className="text-grays-900 ml-4">
              <p className="mb-5"> Longest</p>
              <p> Current</p>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-2">
          <span className="mt-6 ml-4 font-extralight text-sm text-grays-800">
            Take a lesson to increase your streak days
          </span>
          <span>
            {" "}
            <Link className="text-sm ml-32 text-blues-1100" href="#">
              Take a lesson →
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
