"use client"

import React, { PureComponent } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, CartesianAxis, ResponsiveContainer, Legend } from "recharts";

const data = [
  {
    name: "Mon",
    Days: 4,
  },
  {
    name: "Tue",
    Days: 5,
  },
  {
    name: "Wed",
    Days: 3,
  },
  {
    name: "Thu",
    Days: 4,
  },
  {
    name: "Fri",
    Days: 3,
  },
  {
    name: "Sat",
    Days: 4.7,
  },
  {
    name: "Sun",
    Days: 4.4,
  },
]

export default class BarChartComponent extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width={"100%"} height={350}>
        <BarChart
          width={"100%"}
          height={450}
          data={data}
        >
          <XAxis dataKey="name" stroke="#0D0D0DCC" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Days" fill="#004080CC" background={{ fill: "#0040801A" }} barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
