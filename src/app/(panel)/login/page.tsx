"use client"
import axiosConnection from "@/app/utils/axios.connection";
import useAuthStore from "@/app/utils/react_auth_context";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import swal from "sweetalert";

type LoginData = {
  email: string
  password: string
}


const LoginPage = () => {
  const router = useRouter()
  const { setAuth } = useAuthStore();

  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  })

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!loginData.email || !loginData.password) return toast.error("Please fill all fields");
    if (!loginData.email.includes("@")) return toast.error("Please enter a valid email");

    toast.loading("Logging in...")
    try {
      const res = await axiosConnection.post("/Company/signin", {
        company_login: loginData.email,
        password: loginData.password
      })
      if (res.data.status === 400) return toast.error(res.data.message);
      if (res.data.status === 200 && res.data.payload) {
        setAuth({
          user: res.data.payload,
          token: res.data.token
        })
        document.cookie = `token=${res.data.token}`
        router.push("/")
      }
    } catch (error: any) {
      toast.dismiss();
      swal({
        icon: "info",
        title: "Login Error",
        text: error?.res?.data?.message || error?.message
      })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginData({
      ...loginData,
      [name]: value
    })
  }

  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Image
          src="/logo2.png"
          alt="Logo"
          width={200}
          height={35}
          className="invert mb-10 w-52 h-9"
        />
        <form action="" onSubmit={handleLogin}>
          <div className="md:w-[400px]">
            <input
              type="text"
              name="email"
              required
              onChange={handleInputChange}
              placeholder="Email or Username"
              className="border-2 focus:outline-indigo-800 outline-1  border-gray-300 rounded-md p-3 m-2 w-72 md:w-full outline-none font-medium block mb-5"
            />
          </div>
          <div className="md:w-[400px]">
            <input
              type="password"
              required
              name="password"
              onChange={handleInputChange}
              placeholder="Password"
              className="border-2 focus:outline-indigo-800 outline-1 border-gray-300 rounded-md p-3 m-2 w-72 md:w-full outline-none  font-medium block mb-5"
            />
          </div>
          <div className="md:w-[400px]">
            <input
              type="submit"
              value="Login"
              className="bg-slate-800 text-white cursor-pointer outline-1 border-gray-300 rounded-md p-3 m-2 w-72 md:w-full outline-none font-medium block hover:bg-slate-600"
            />
          </div>
          <div className="md:w-[400px] flex justify-between">
            <Link
              href="/register"
              className="text-slate-800 cursor-pointer outline-1 border-gray-300 rounded-md py-2 m-2 font-medium text-sm inline-block"
            >
              Create an Account
            </Link>
            <Link
              href="/login/forget"
              className="text-slate-800 cursor-pointer outline-1 border-gray-300 rounded-md py-2 m-2 font-medium text-sm inline-block"
            >
              Forget Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}


export default LoginPage;
