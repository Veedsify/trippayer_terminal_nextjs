"use client";
import CompanyRegisterForm from "@/app/components/companyRegisterForm";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import swal from "sweetalert";

const LoginPage = () => {
  const userLogin = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    swal({
      icon: "info",
      title: "Coming Soon",
      className: "text-center",
      text: "Sorry, This feature is coming soon, please signup as a company for now",
      buttons: {
        confirm: {
          text: "OK",
          value: true,
          visible: true,
          closeModal: true,
        },
      }
    })
  }
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="mx-auto w-[187px] h-[32px] relative mb-6">
          <Image
            src="/logo2.png"
            alt="Logo"
            priority
            fill
            sizes="100px"
            className="invert h-auto mb-10"
          />
        </div>
        <Tabs selectedTabClassName="bg-white border">
          <TabList className="grid grid-cols-2 items-center justify-center gap-2 my-5 rounded-lg p-1 bg-gray-100 mb-10 w-72">
            <Tab className="py-2 px-4 text-center font-bold cursor-pointer outline-none duration-300">
              User
            </Tab>
            <Tab className="py-2 px-4 text-center font-bold cursor-pointer outline-none duration-300">
              Agency
            </Tab>
          </TabList>
          <div className="duration-300 transition-all">
            <TabPanel className="duration-300">
              <form action="" onSubmit={userLogin}>
                <div className="md:w-[400px]">
                  <input
                    type="text"
                    placeholder="FullName"
                    className="border-2 focus:outline-indigo-800 outline-1  border-gray-300 rounded-md p-3 m-2 w-72 md:w-full outline-none font-medium block mb-5"
                  />
                </div>
                <div className="md:w-[400px]">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="border-2 focus:outline-indigo-800 outline-1  border-gray-300 rounded-md p-3 m-2 w-72 md:w-full outline-none font-medium block mb-5"
                  />
                </div>
                <div className="md:w-[400px]">
                  <input
                    type="password"
                    placeholder="Password"
                    className="border-2 focus:outline-indigo-800 outline-1 border-gray-300 rounded-md p-3 m-2 w-72 md:w-full outline-none  font-medium block mb-5"
                  />
                </div>
                <div className="md:w-[400px] mb-4">
                  <input
                    type="submit"
                    value="Create Account"
                    className="bg-slate-800 text-white cursor-pointer outline-1 border-gray-300 rounded-md p-3 m-2 w-72 md:w-full outline-none font-medium block hover:bg-slate-600"
                  />
                </div>
                <div className="md:w-[400px]">
                  <button
                    type="submit"
                    className="border cursor-pointer outline-1 border-gray-300 rounded-md p-3 m-2 w-72 md:w-full outline-none font-medium flex items-center justify-center gap-3"
                  >
                    <Image
                      src="/google.webp"
                      alt="Google"
                      className="h-auto"
                      width={20}
                      height={20}
                    />
                    Google
                  </button>
                  <Link href="/login" className="font-bold px-2">
                    Have an account? <span className="text-teal-500">
                      Login
                    </span>
                  </Link>
                </div>
              </form>
            </TabPanel>

            <TabPanel className="duration-300">
              <CompanyRegisterForm />
              <Link href="/login" className="font-bold">
                Have an account? <span className="text-teal-500">
                  Login
                </span>
              </Link>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default LoginPage;
