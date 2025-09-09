import React from "react";
// Импорты из Recharts
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

type DataPoint = {
  name: string;
  users: number;
  sales: number;
};

// 1) Простой мок-датасет:
const data: DataPoint[] = [
  { name: "Jan", users: 30, sales: 240 },
  { name: "Feb", users: 45, sales: 300 },
  { name: "Mar", users: 60, sales: 200 },
  { name: "Apr", users: 80, sales: 400 },
  { name: "May", users: 65, sales: 350 },
];

const LineChartSimple: React.FC = () => {
  return (

    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />{" "}
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="users"
          stroke="#3182CE"
          activeDot={{ r: 6 }}
        />
        <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartSimple;
