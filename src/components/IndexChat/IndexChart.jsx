import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import Sidebar from "./SideBar";
import { IoMdArrowDropdown } from "react-icons/io";
import React from "react";

const IndexChart = () => {
  const data = [
    { name: "Jan", wpPool: 20, google: 10, microsoft: 30, twitter: 15 },
    { name: "Feb", wpPool: 40, google: 20, microsoft: 25, twitter: 20 },
    { name: "Mar", wpPool: 70, google: 30, microsoft: 50, twitter: 35 },
    { name: "Apr", wpPool: 100, google: 50, microsoft: 65, twitter: 45 },
    { name: "May", wpPool: 90, google: 60, microsoft: 80, twitter: 50 },
    { name: "Jun", wpPool: 80, google: 70, microsoft: 75, twitter: 55 },
    { name: "Jul", wpPool: 75, google: 85, microsoft: 95, twitter: 60 },
    { name: "Jun", wpPool: 65, google: 86, microsoft: 54, twitter: 23 },
    { name: "May", wpPool: 35, google: 99, microsoft: 23, twitter: 54 },
    { name: "Apr", wpPool: 75, google: 63, microsoft: 84, twitter: 65 },
    { name: "Mar", wpPool: 95, google: 65, microsoft: 23, twitter: 12 },
    { name: "Feb", wpPool: 15, google: 82, microsoft: 64, twitter: 32 },
    { name: "Jan", wpPool: 25, google: 85, microsoft: 67, twitter: 53 },
  ];

  const renderTooltip = ({ payload, label }) => {
    if (payload && payload.length) {
      return (
        <div className="bg-white p-2 shadow-md rounded border">
          <p>{label}</p>
          <p style={{ color: "#FF0000" }}>{`WPPOOL: ${payload[0].value}%`}</p>
          <p style={{ color: "#0000FF" }}>{`Google: ${payload[1].value}%`}</p>
          <p
            style={{ color: "#00FF00" }}
          >{`Microsoft: ${payload[2].value}%`}</p>
          <p
            style={{ color: "#800080" }}
          >{`Twitter Index: ${payload[3].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <div className="flex justify-center mt-4">
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="flex items-center mx-4">
            <div
              style={{ backgroundColor: entry.color }}
              className="w-4 h-4 rounded-full mr-2"
            ></div>
            <span className="text-[#748DA1]">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col m-5">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <div className="text-left mb-6">
            <h1 className="text-3xl font-bold flex gap-2">
              <img src="union.png" alt="union image" />
              The WPPOOL Index
            </h1>
          </div>
          <div className="grid grid-cols-4 gap-4 text-center mb-6">
            <div className="bg-[#F3F3F3] font-bold rounded-lg p-4 flex justify-between items-center">
              <span className="text-[#FC714D] text-[30px]">+66.2%</span>
              <span className="text-[#191618]">
                WPPOOL Index
                <span className="ms-1 border border-r-[#FC714D] border-e-4"></span>
              </span>
            </div>
            <div className="bg-[#F3F3F3] font-bold rounded-lg p-4 flex justify-between items-center">
              <span className="text-[#615DE3] text-[30px]">+26.6%</span>
              <span className="text-[#191618]">
                Google Index
                <span className="ms-1 border border-r-[#615DE3] border-e-4"></span>
              </span>
            </div>
            <div className="bg-[#F3F3F3] font-bold rounded-lg p-4 flex justify-between items-center">
              <span className="text-[#7CA63A] text-[30px]">+34.1%</span>
              <span className="text-[#191618]">
                Microsoft
                <span className="ms-1 border border-r-[#7CA63A] border-e-4"></span>
              </span>
            </div>
            <div className="bg-[#F3F3F3] font-bold rounded-lg p-4 flex justify-between items-center">
              <span className="text-[#6F34A1] text-[30px]">+66.2%</span>
              <span className="text-[#191618]">
                Twitter Index
                <span className="ms-1 border border-r-[#6F34A1] border-e-4"></span>
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-center mb-6">
              <button className="bg-[#2042B6] text-white rounded-3xl px-4 py-1 mx-2 flex justify-between items-center gap-3">
                Sectors <IoMdArrowDropdown />
              </button>
              <button className="bg-[#2042B6] text-white rounded-3xl px-4 py-1 mx-2 flex justify-between items-center gap-3">
                Types of IPO <IoMdArrowDropdown />
              </button>
            </div>
            <div className="flex justify-center mb-6 bg-[#EFF3F6] rounded-3xl">
              <button className="text-[#748DA1] rounded px-4 py-2 mx-2">
                1Y
              </button>
              <button className="text-white bg-[#2042B6] rounded-3xl px-4 py-2 mx-2">
                YTD
              </button>
              <button className="text-[#748DA1] rounded px-4 py-2 mx-2">
                6M
              </button>
              <button className="text-[#748DA1] rounded px-4 py-2 mx-2">
                1M
              </button>
              <button className="text-[#748DA1] rounded px-4 py-2 mx-2">
                1W
              </button>
            </div>
          </div>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={renderTooltip} />
                <Legend content={renderLegend} />
                <Line
                  type="monotone"
                  dataKey="wpPool"
                  stroke="#FF0000"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="google"
                  stroke="#0000FF"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="microsoft"
                  stroke="#00FF00"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="twitter"
                  stroke="#800080"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default IndexChart;
