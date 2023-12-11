import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";
import { useAppContext } from "@/app/context";

export default function DashboardCalendar() {
  const [value, setValue] = useState(new Date());
  const { streakdays } = useAppContext()

  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <div className="rounded-lg shaddow-xl w-full shadow-lg">
      <div className="flex px-3 py-2 gap-[10px] items-center outline outline-1 outline-grays-200 rounded-t-lg">
        <Image
          src={'/svgs/Progress.svg'}
          height={24}
          width={24}
          alt="Progress"
        />
        <h1 className="font-bold text-xl text-grays-900">Progress Tracker</h1>
      </div>
      <div className="py-4 px-6 outline outline-1 outline-grays-200">
        <Calendar
          onChange={onChange}
          value={value}
        />
      </div>
      <div className="flex px-[14px] py-2 gap-2 items-center rounded-b-lg">
        <Image
          src={'/svgs/Progress.svg'}
          height={20}
          width={20}
          alt="Progress"
        />
        <h1 className="font-bold text-grays-900">{streakdays} Days with learning progress</h1>
      </div>
    </div>
  );
}
