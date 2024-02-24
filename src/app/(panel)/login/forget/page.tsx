import Image from "next/image";
import Link from "next/link";

const ForgetPassword = () => {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <Image
          src="/logo2.png"
          alt="Logo"
          width={200}
          priority
          height={35}
          className="invert h-auto object-cover w-52 inline-block mb-10"
        />
        <form action="">
          <div className="md:w-[400px]">
            <small className="p-2 mb-3 text-center block">Enter your email address and a reset link would be sent to you</small>
            <input
              type="text"
              placeholder="Email Address"
              className="border-2 focus:outline-indigo-800 outline-1  border-gray-300 rounded-md p-3 m-2 w-72 md:w-full outline-none font-medium block mb-5"
            />
          </div>
          <div className="md:w-[400px]">
            <input
              type="submit"
              value="Send Reset Link"
              className="bg-slate-800 text-white cursor-pointer outline-1 border-gray-300 rounded-md p-3 m-2 w-72 md:w-full outline-none font-medium block hover:bg-slate-600"
            />
          </div>
          <div className="md:w-[400px]">
            <Link
              href="/login"
              className="text-slate-800 cursor-pointer outline-1 border-gray-300 rounded-md py-2 m-2 font-medium text-sm inline-block"
            >
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
