import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import calendarStyle from "../dashboard/calendar.module.css";

export default function DashboardCalendar() {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <div className="border border-white-900 rounded-lg shadow-black-500/100 mt-10 ml-4">
      {" "}
      <div className="mt-2 mb-3">
        <h1 className="ml-4 mb-2 font-semibold">Progress Tracker</h1>
        <hr></hr>
      </div>
      <div className="">
        <Calendar
          onChange={onChange}
          value={value}
          className={calendarStyle.custonCalendar}
        />
      </div>
    </div>
  );
}
