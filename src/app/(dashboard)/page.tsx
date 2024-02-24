"use client";
import {
  Bookmark,
  DollarSign,
  LucideBell,
  LucideBookmarkPlus,
  LucideChevronRight,
  LucidePercent,
  LucideStar,
} from "lucide-react";
import Link from "next/link";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { DashBoardChart } from "../components/dashboard_charts";
import { MouseEvent, useContext } from "react";
import useAuthStore from "../utils/react_auth_context";

export default function Home() {
  function setButtonActive(e: MouseEvent<HTMLButtonElement>) {
    const classArray = e.currentTarget.classList;
    const siblings1 = e.currentTarget.nextElementSibling;
    const siblings2 = e.currentTarget.previousElementSibling;

    if (classArray.contains("bg-slate-800")) {
      e.currentTarget.classList.remove("bg-slate-800");
    } else {
      e.currentTarget.classList.add("bg-slate-800");
    }
  }
  return (
    <>
      <div className="mt-10 grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-6 mb-12">
        <div className="bg-white px-4 shadow rounded-md">
          <div className="flex items-center justify-between border-b py-5">
            <div>
              <p className="mb-1">Total Booking</p>
              <h2 className="text-2xl font-medium">55</h2>
            </div>
            <div className="p-2 rounded-md bg-purple-600">
              <LucideBookmarkPlus stroke="#fff" size={30} strokeWidth={1} />
            </div>
          </div>
          <Link
            href="/dashboard/booking"
            className="text-black flex items-center justify-between py-3"
          >
            <span>View Details</span>
            <LucideChevronRight />
          </Link>
        </div>
        <div className="bg-white px-4 shadow rounded-md">
          <div className="flex items-center justify-between border-b py-5">
            <div>
              <p className="mb-1">New Reviews</p>
              <h2 className="text-2xl font-medium">22</h2>
            </div>
            <div className="p-2 rounded-md bg-amber-500">
              <LucideStar stroke="#fff" size={30} strokeWidth={1} />
            </div>
          </div>
          <Link
            href="/dashboard/booking"
            className="text-black flex items-center justify-between py-3"
          >
            <span>View Details</span>
            <LucideChevronRight />
          </Link>
        </div>
        <div className="bg-white px-4 shadow rounded-md">
          <div className="flex items-center justify-between border-b py-5">
            <div>
              <p className="mb-1">Revenue Overview</p>
              <h2 className="text-2xl font-medium">$260,000</h2>
            </div>
            <div className="p-2 rounded-md bg-green-600">
              <DollarSign stroke="#fff" size={30} strokeWidth={1} />
            </div>
          </div>
          <Link
            href="/dashboard/booking"
            className="text-black flex items-center justify-between py-3"
          >
            <span>View Details</span>
            <LucideChevronRight />
          </Link>
        </div>
        <div className="bg-white px-4 shadow rounded-md">
          <div className="flex items-center justify-between border-b py-5">
            <div>
              <p className="mb-1">New Bookmarks</p>
              <h2 className="text-2xl font-medium">25</h2>
            </div>
            <div className="p-2 rounded-md bg-pink-700">
              <Bookmark stroke="#fff" size={30} strokeWidth={1} />
            </div>
          </div>
          <Link
            href="/dashboard/booking"
            className="text-black flex items-center justify-between py-3"
          >
            <span>View Details</span>
            <LucideChevronRight />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
        <div className="bg-white border shadow-md lg:col-span-6 rounded-md px-4">
          <Tabs
            selectedTabClassName="bg-slate-800 text-white"
          >
            <TabList
              className={`flex items-center justify-between py-4 list-none gap-4 border-b`}
            >
              <div className="flex flex-wrap gap-4 items-center">
                <Tab
                  className="p-2 px-5 cursor-pointer outline-none rounded-md border "
                >
                  Day
                </Tab>
                <Tab
                  className="p-2 px-5 cursor-pointer outline-none rounded-md border "
                >
                  This Week
                </Tab>
                <Tab
                  className="p-2 px-5 cursor-pointer outline-none rounded-md border "
                >
                  This Month
                </Tab>
              </div>
              <div>
                <select className="px-6 py-1 rounded-md border bg-none">
                  {[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ].map((month, index) => (
                    <option key={index} value={index}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
            </TabList>
            <TabPanel>
              <DashBoardChart />
            </TabPanel>
            <TabPanel>
              <DashBoardChart />
            </TabPanel>
            <TabPanel>
              <DashBoardChart />
            </TabPanel>
          </Tabs>
        </div>
        <div className="bg-white border shadow-md lg:col-span-4 rounded-md">
          <div className="flex justify-between items-center py-6 border-b  px-4 md:px-8">
            <h2 className="font-bold text-xl">Notification</h2>
            <form action="">
              <input type="checkbox" className="w-6 h-6 accent-slate-900" />
            </form>
          </div>
          <div className="">
            <ul>
              <li className="border-b">
                <span className="hover:bg-gray-100 flex py-3 px-4 md:px-8 gap-3 items-center">
                  <span className="p-3 rounded-full bg-blue-500">
                    <LucideBell stroke="#fff" strokeWidth={2} />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-bold">Status Updated</span>
                    <span className="text-xs">2 min ago</span>
                  </span>
                  <form className="ml-auto">
                    <input type="checkbox" className="w-5 h-5 border" />
                  </form>
                </span>
              </li>
              <li className="border-b">
                <span  className="hover:bg-gray-100 flex py-3 px-4 md:px-8 gap-3 items-center">
                  <span className="p-3 rounded-full bg-purple-500">
                    <LucidePercent stroke="#fff" strokeWidth={2} />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-bold">50% discount offer</span>
                    <span className="text-xs">2 min ago</span>
                  </span>
                  <form className="ml-auto">
                    <input type="checkbox" className="w-5 h-5" />
                  </form>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
