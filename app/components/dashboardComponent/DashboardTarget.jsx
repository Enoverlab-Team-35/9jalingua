import { React, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";

import { TbTargetArrow } from "react-icons/tb";

export default function DashboardTarget() {
  const [percentage, setPercentage] = useState(5);

  return (
    <div className="bg-greens-1000 rounded-lg pb-11">
      <div className="flex px-6 sm:px-3 sm:py-3 py-4 gap-2 items-center outline outline-1 outline-grays-200 rounded-t-lg">
        <TbTargetArrow size={24} color="#0D0D0DCC" />
        <h1 className="text-grays-900 font-bold">Vocabulary Mastery Target</h1>
      </div>

      <div className="mt-8 sm:mt-6 px-6 sm:px-4 flex items-center gap-1">
        <p className="font-bold text-xl text-grays-900">0</p>
        <p className="text-grays-800">new words learned</p>
      </div>

      <div className="mt-6 px-6 sm:px-4 flex gap-2 items-center">
        <div className="w-20 aspect-square">
          <CircularProgressbar value={percentage} strokeWidth={20} />
        </div>
        <div className="flex items-center gap-1">
          <p className="font-bold text-xl text-grays-900">{`${percentage}%`} </p>
          <p className="text-sm text-grays-900">
            of weekly goal achieved
          </p>
        </div>
      </div>
    </div>
  );
}
