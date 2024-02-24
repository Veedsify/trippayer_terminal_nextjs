"use client";
import { LucideBell, LucideMail, LucideMenu, LucideSearch, LucideSettings, LucideUpload, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useNavbarContext } from "../libs/navbar_context";
import { MutableRefObject, RefObject, useEffect, useRef, useState } from "react";
import useAuthStore from "../utils/react_auth_context";

function Nav() {
  const { toggleSidebar, isSidebarOpen } = useNavbarContext();
  const ref = useRef(null)
  const [menu, setMenu] = useState(false)
  const { user } = useAuthStore();
  function openSideBar() {
    toggleSidebar();
  }

  function handleCloseFunction(e: MouseEvent) {
    if (ref.current && (ref.current as { target: EventTarget }).target !== e.target) {
      setMenu(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleCloseFunction);

    return () => {
      document.removeEventListener("click", handleCloseFunction);
    };
  }, [menu]);

  return (
    <header className="px-4 border-b-[0.01rem] border-[#ededed29]">
      <nav className="flex items-center gap-4 py-5 lg:py-0">
        <Link href="/">
          <Image
            src="/logo2.png"
            width={200}
            height={200}
            className="h-auto object-cover rounded-full w-[100px] md:w-[200px]"
            alt="icon"
          />
        </Link>
        <form action="" className="ml-8 hidden lg:block">
          <label
            className="flex items-center gap-1 bg-white rounded-md pr-3 overflow-hidden"
            htmlFor="search"
          >
            <input
              type="text"
              id="search"
              placeholder="Search.."
              name="search"
              className="p-3 py-2 outline-none border-none 2xl:w-96 font-semibold"
            />
            <button>
              <LucideSearch />
            </button>
          </label>
        </form>
        <div className="ml-auto block lg:hidden">
          <span
            className="inline-block p-1 rounded-md bg-gray-200 bg-opacity-20"
            onClick={openSideBar}
          >
            <LucideMenu stroke="#fff" />
          </span>
        </div>
        <div className="ml-auto hidden lg:block">
          <ul className="flex items-center">
            <li className="py-4 ml-6">
              <span className="p-2 rounded-full bg-gray-200 bg-opacity-50 inline-block cursor-pointer">
                <LucideBell stroke="#fff" />
              </span>
            </li>
            <li className="py-4 ml-6">
              <span className="p-2 rounded-full bg-gray-200 bg-opacity-50 inline-block cursor-pointer">
                <LucideMail stroke="#fff" />
              </span>
            </li>

            <li className="py-4 ml-6 relative" onClick={() => setMenu(true)}>
              <span className="cursor-pointer flex items-center gap-2 outline outline-1 outline-white rounded-3xl p-1 xl:pr-3">
                <Image
                  src="/avatar.jpg"
                  alt="logo"
                  height={40}
                  width={40}
                  className="rounded-full"
                />
                <span
                  className="font-bold text-sm text-white hidden xl:block ">
                  {(user?.company_name).toUpperCase()}
                </span>

                {menu && (
                  <ul
                    ref={ref}
                    className="bg-white border transition-all text-black absolute w-full md:w-52 right-0 top-full rounded-md">
                    <li>
                      <Link href="/plans/upload" className="flex items-center gap-2 p-4 hover:bg-gray-200">
                        <LucideUpload />
                        <span className="font-medium">
                          Upload
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/settings" className="flex items-center gap-2 p-4 hover:bg-gray-200">
                        <LucideSettings />
                        <span className="font-medium">
                          Settings
                        </span>
                      </Link>
                    </li>
                  </ul>
                )}
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
