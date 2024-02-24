"use client";
import {
  LogOut,
  LucideBarChart3,
  LucideDollarSign,
  LucidePlane,
  LucideSettings,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useNavbarContext } from "../libs/navbar_context";
import { MouseEvent, useEffect, useState } from "react";
import Sublinks from "./sub/sublinks";
import { usePathname, useRouter } from "next/navigation";
import useAuthStore from "../utils/react_auth_context";

function SideBar() {
  const { isSidebarOpen, toggleSidebar } = useNavbarContext();
  const pathName = usePathname();
  const router = useRouter()

  const { user } = useAuthStore();

  useEffect(() => {
    const toggleSidebarHandler = () => {
      toggleSidebar();
    };
    toggleSidebarHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);

  const logOutUser = () => {
    document.cookie = `token=${""}; expires=${Date.now()}; path=/;`;
    router.push("/login")
  }
  return (
    <div
      className={`fixed duration-300 top-0 h-full w-[300px] border-r z-50 bg-white lg:left-0 ${isSidebarOpen ? "-left-0" : "-left-full"
        }`}
    >
      <div className="flex items-center pl-4 py-4 border-b gap-4">
        <Image
          src="/avatar.png"
          priority
          width={60}
          height={60}
          className="h-auto object-cover rounded-full"
          alt="icon"
        />
        <div>
          <p className="font-bold">{(user?.company_name).toUpperCase()}</p>
          <p className="text-sm font-medium">Welcome to Admin Panel</p>
        </div>
      </div>
      <div className="px-5 py-5 relative">
        <ul>
          <li className="mb-2">
            <Link
              href="/"
              className={`font-medium flex items-center p-2 px-3 hover:bg-slate-800 rounded-md
             gap-3 hover:text-white  group
             ${pathName === "/" ? "bg-slate-800 text-white" : ""}
             `}
            >
              <LucideBarChart3
                stroke="#f60"
                className={`group-hover:stroke-white 
                ${pathName === "/" ? "stroke-white" : ""}
                `}
              />
              Dashboard
            </Link>
          </li>

          <Sublinks
            data={{
              pathName: "/plans",
              mainLink: "Upload Travel Plans",
              iconColor: "cadetblue",
              icon: (
                <LucidePlane
                  className={` group-hover:stroke-white 
                  ${pathName.startsWith("/plans")
                      ? "stroke-white "
                      : "stroke-[teal] "
                    }
                `}
                />
              ),
              subLinks: [
                {
                  name: "Upload",
                  path: "/plans/upload",
                },
                {
                  name: "Travel Plans",
                  path: "/plans",
                },
              ],
            }}
          />

          <Sublinks
            data={{
              pathName: "/subaccounts",
              mainLink: "Sub Accounts",
              iconColor: "cadetblue",
              icon: (
                <LucideDollarSign
                  className={`group-hover:stroke-white 
                  ${pathName.startsWith("/subaccounts")
                      ? "stroke-white"
                      : " stroke-[green]"
                    }
                `}
                />
              ),
              subLinks: [
                {
                  name: "Create Subaccount",
                  path: "/subaccounts/create",
                },
                {
                  name: "Manage Subaccount",
                  path: "/subaccounts/view",
                },
              ],
            }}
          />

          {/* end links with drop */}
          <li className="mb-2">
            <Link
              href="/settings"
              className={`font-medium flex items-center p-2 px-3 hover:bg-slate-800 focus:bg-slate-800 rounded-md focus:text-white
             gap-3 hover:text-white  group  ${pathName.startsWith("/settings") ? "bg-slate-800 text-white" : ""
                }`}
            >
              <LucideSettings
                stroke="indigo"
                className={`group-hover:stroke-white 
                ${pathName === "/settings" ? "stroke-white" : ""}
                `}
              />
              Settings
            </Link>
          </li>

          <li className="mb-2">
            <button
              onClick={() => logOutUser()}
              className="font-medium flex items-center p-2 px-3 hover:bg-red-800 rounded-md
             gap-3 hover:text-white  group w-full"
            >
              <LogOut stroke="red" className="group-hover:stroke-white " />
              Logout
            </button>
          </li>
        </ul>
      </div>
      <div
        className="lg:hidden absolute bg-red-400  border bottom-0 left-0 py-3 flex items-center justify-center w-full"
        onClick={(e: MouseEvent<HTMLDivElement>) => toggleSidebar()}
      >
        <span>
          <X stroke="#fff" />
        </span>
      </div>
    </div>
  );
}

export default SideBar;
