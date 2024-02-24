"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export function DashBoardChart() {
  const data = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 200 },
    { name: "Apr", value: 500 },
    { name: "May", value: 600 },
    { name: "Jun", value: 800 },
    { name: "Jul", value: 300 },
    { name: "Aug", value: 400 },
    { name: "Sep", value: 900 },
    { name: "Oct", value: 1000 },
    { name: "Nov", value: 400 },
    { name: "Dec", value: 800 },
  ];

  return (
    <div className="py-5">
      <h2 className="mb-4 font-bold">Sales Chart:</h2>
      <ResponsiveContainer width="100%" aspect={16 / 9} className="z-40">
        <LineChart
          width={500}
          height={300}
          data={data}
          style={{ width: "100%" }}
        >
          <CartesianGrid strokeDasharray="4 3" />
          <XAxis dataKey="name" className="text-xs font-bold" />
          <YAxis className="text-xs font-bold" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            strokeWidth={2}
            dataKey="value"
            stroke="#175b1e"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
