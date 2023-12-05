import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import calendarStyle from "../../dashboard/calendar.module.css";

export default function DashboardCalendar() {
  const [value, setValue] = useState(new Date());
  const [days, setDays] = useState(0);

  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <div className="border border-white-900 rounded shaddow-xl md:w-full shaddow-2xl">
      {" "}
      <div className="mt-2 mb-3">
        <h1 className="ml-4 mb-2 font-semibold">Progress Tracker</h1>
        <hr></hr>
      </div>
      <div className="flex flex-col justify-items-center items-stretch">
        <Calendar
          onChange={onChange}
          value={value}
          className={calendarStyle.customCalendar}
        />
        <hr></hr>
        <p className="ml-10 mt-3 mb-3">{days} Days with learning progress</p>
      </div>
    </div>
  );
}
