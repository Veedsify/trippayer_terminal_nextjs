"use client";
import PlansDataTable from "@/app/components/sub/plansDataTable";
import axiosConnection from "@/app/utils/axios.connection";
import { useEffect, useState } from "react";

function TravelPlans() {
  const [data, setData] = useState(null)
  useEffect(() => {
    async function fetchdata() {
      const res = await axiosConnection.get('/Company/routes', {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${document.cookie.split("token=")[1] || ""}`
        }
      });

      if (res.status === 200 && res.data) {
        setTimeout(() => {
          setData(res.data.payload)
        }, 2000);
        console.log(res.data.payload)
      }
    }
    fetchdata()
  }, [setData])

  return (
    <>
      <div className="text-center">
        <h1 className="text-white font-bold md:text-3xl text-2xl mb-5">
          Travel Plans
        </h1>
        <div className="py-5">
          <div className="bg-white shadow-md rounded-md p-4">
            <div className="flex items-center justify-between gap-2 mb-6">
              <div className="text-left">
                <p className="text-gray-800 font-bold">Travel Plans</p>
                <p className="text-gray-500 text-sm font-medium">
                  Showing Results for Today
                </p>
              </div>
              <div>
                <select className="p-3 py-3 rounded-md border text-sm bg-gray-50 outline-none">
                  <option value="today">Today</option>
                  <option value="yesterday">Yesterday</option>
                  <option value="last-week">Last Week</option>
                  <option value="last-month">Last Month</option>
                </select>
              </div>
            </div>
            {/* Loaded Table Data */}
            {data ? (<PlansDataTable data={data} />) : (
              <div className="flex flex-col gap-3">
                <div className="p-3 w-full bg-gray-100 animate-pulse"></div>
                <div className="p-3 w-full bg-gray-100 animate-pulse"></div>
                <div className="p-3 w-full bg-gray-100 animate-pulse"></div>
                <div className="p-3 w-full bg-gray-100 animate-pulse"></div>
                <div className="p-3 w-full bg-gray-100 animate-pulse"></div>
                <div className="p-3 w-full bg-gray-100 animate-pulse"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default TravelPlans;
