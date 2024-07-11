import React from "react";
import { IoIosSearch } from "react-icons/io";

const companies = [
  {
    company: "Adyen",
    ticker: "AFRM",
    vertical: "Payments",
    price: "$17.15",
    marketCap: "$50.5",
    revenueGrowth: "49.0%",
    grossMargin: "15.8%",
    evRevenue: "6.3",
    ytdPerformance: "24.3%",
  },
  {
    company: "Affirm",
    ticker: "AFRM",
    vertical: "Lending",
    price: "$16.12",
    marketCap: "$4.7",
    revenueGrowth: "32.0%",
    grossMargin: "48.7%",
    evRevenue: "4.9",
    ytdPerformance: "77.1%",
  },
  {
    company: "Alkami Technology",
    ticker: "ALKT",
    vertical: "B2B SaaS",
    price: "$16.27",
    marketCap: "$1.5",
    revenueGrowth: "34.0%",
    grossMargin: "53.0%",
    evRevenue: "7.0",
    ytdPerformance: "10.0%",
  },
  {
    company: "AvidXchange",
    ticker: "AVDX",
    vertical: "Payments",
    price: "$10.21",
    marketCap: "$2.0",
    revenueGrowth: "27.0%",
    grossMargin: "61.5%",
    evRevenue: "6.0",
    ytdPerformance: "10.5%",
  },
  {
    company: "Bakkt Holdings",
    ticker: "BKKT",
    vertical: "Wealth",
    price: "$1.32",
    marketCap: "$0.1",
    revenueGrowth: "38%",
    grossMargin: "--",
    evRevenue: "0.4",
    ytdPerformance: "13.8%",
  },
  {
    company: "Virtu Financial Inc",
    ticker: "VIRT",
    vertical: "Wealth",
    price: "$17.0",
    marketCap: "$3.1",
    revenueGrowth: "-22.0%",
    grossMargin: "38.2%",
    evRevenue: "2.6",
    ytdPerformance: "-17.8%",
  },
  {
    company: "Adyen",
    ticker: "AFRM",
    vertical: "Payments",
    price: "$17.15",
    marketCap: "$50.5",
    revenueGrowth: "49.0%",
    grossMargin: "15.8%",
    evRevenue: "6.3",
    ytdPerformance: "24.3%",
  },
  {
    company: "Affirm",
    ticker: "AFRM",
    vertical: "Lending",
    price: "$16.12",
    marketCap: "$4.7",
    revenueGrowth: "32.0%",
    grossMargin: "48.7%",
    evRevenue: "4.9",
    ytdPerformance: "77.1%",
  },
  {
    company: "Alkami Technology",
    ticker: "ALKT",
    vertical: "B2B SaaS",
    price: "$16.27",
    marketCap: "$1.5",
    revenueGrowth: "34.0%",
    grossMargin: "53.0%",
    evRevenue: "7.0",
    ytdPerformance: "10.0%",
  },
  {
    company: "AvidXchange",
    ticker: "AVDX",
    vertical: "Payments",
    price: "$10.21",
    marketCap: "$2.0",
    revenueGrowth: "27.0%",
    grossMargin: "61.5%",
    evRevenue: "6.0",
    ytdPerformance: "10.5%",
  },
];

const Companies = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-full  bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold mb-6">All Companies</h1>
          <div className="mb-6 relative w-2/5">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IoIosSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search Companies"
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="h-96 overflow-x-auto">
          <table className="table table-zebra">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Company
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Ticker
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Vertical
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Price
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Market Cap ($B)
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Revenue Growth
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  Gross Margin
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  EV/Revenue
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                  YTD Performance
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {companies.map((company, index) => (
                <tr key={index} className="bg-white hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {company.company}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {company.ticker}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {company.vertical}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {company.price}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {company.marketCap}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {company.revenueGrowth}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {company.grossMargin}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {company.evRevenue}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {company.ytdPerformance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-6 gap-4">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-3xl shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Download ‘All Companies’ Data
          </button>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-3xl shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            View Methodology
          </button>
        </div>
      </div>
    </div>
  );
};

export default Companies;
