import { React, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";

import { TbTargetArrow } from "react-icons/tb";

export default function DashboardTarget() {
  const [percentage, setPercentage] = useState(0);
  return (
    <div>
      <div className="bg-greens-1000 mt-10 border rounded md:w-full pr-8">
        <div className="flex mb-2 font-semibold">
          {" "}
          <TbTargetArrow className="mt-5 ml-4" />
          <h1 className="ml-2 mt-4">Vocabulary Mastery Target</h1>
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
          <div className="ml-2 mt-16 ">
            {" "}
            <span className="font-bold">{`${percentage}%`} </span>
            <span className="text-xs text-grays-800">
              of weekly goal achieved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
