"use client"

import React, { PureComponent } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
const data = [
  {
    name: "Mon",
    uv: 4,
  },
  {
    name: "Tue",
    uv: 5,
  },
  {
    name: "Wed",
    uv: 3,
  },
  {
    name: "Thu",
    uv: 4,
  },
  {
    name: "Fri",
    uv: 3,
  },
  {
    name: "Sat",
    uv: 4.7,
  },
  {
    name: "Sun",
    uv: 4.4,
  },
]

export default class BarChartComponent extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width={354} height={291}>
        <BarChart width={354} height={291} data={data}>
          <XAxis dataKey="name" stroke="#FFFFFF" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="uv" fill="#cccccc" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
