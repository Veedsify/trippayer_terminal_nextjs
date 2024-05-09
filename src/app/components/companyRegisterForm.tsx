"use client";
import { ChangeEvent, useRef, useState } from "react";
import { ValidFormData } from "../types/validFromData";
import toast from "react-hot-toast";
import { validateForm } from "../libs/validateform";
import axiosConnection from "../utils/axios.connection";
import { read } from "fs";
import swal from "sweetalert";
import { useRouter } from "next/navigation";


const CompanyRegisterForm = () => {
    const router = useRouter();
    const ref = useRef<HTMLFormElement>(null) as React.MutableRefObject<HTMLFormElement>;
    const [registerDetails, setRegisterDetails] = useState<ValidFormData>({
        companyName: "",
        companyEmail: "",
        companyPhone: "",
        companyAddress: "",
        companyWebsite: "",
        companyBusNumber: "",
        companyCac: "",
        companyPassword: "",
    });

    const handleRegisterDetails = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setRegisterDetails({
            ...registerDetails,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formValidate = await validateForm(registerDetails);
        if (formValidate === true) {
            // Send data to the server
            toast.loading("Please wait...");
            axiosConnection.post(`/Company/signup`, {
                "company_name": registerDetails?.companyName,
                "company_email": registerDetails?.companyEmail,
                "email_alert": registerDetails?.companyEmail,
                "password": registerDetails?.companyPassword,
                "repeat_password": registerDetails?.companyPassword,
                "company_phone": registerDetails?.companyPhone,
                "company_address": registerDetails?.companyAddress,
                "company_cac": registerDetails?.companyCac,
                "company_website": registerDetails?.companyWebsite,
                "number_of_buses": registerDetails?.companyBusNumber,
            }).then((res: any) => {
                if (res.data.success && res.data.status === 200) {
                    toast.dismiss()
                    ref.current.reset();
                    swal({
                        title: "Success",
                        text: res.data.message,
                        icon: "success",
                        buttons: {
                            "Cancel": {
                                text: "Close",
                            },
                            "Login": {
                                text: "Login",
                                className: "bg-green-500 text-white"
                            },
                        },
                    }).then(() => {
                        router.push("/login");
                    });
                } else {
                    toast.dismiss()
                    toast.error(res.data.message);
                }
            }).catch((err: any) => {
                toast.dismiss()
                toast.error(err?.res?.data?.message || err?.message);
            })
        }
    }
    return (
        <form
            onSubmit={handleSubmit}
            action=""
            ref={ref}
            className="md:grid md:grid-cols-2 gap-3 md:min-w-[700px]"
        >
            <div className="md:col-span-2">
                <input
                    type="text"
                    name="companyName"
                    onChange={handleRegisterDetails}
                    placeholder="Company Name"
                    className="border-2 focus:outline-indigo-800 outline-1  border-gray-300 rounded-md p-3 w-full outline-none font-medium block mb-5"
                />
            </div>
            <div className="">
                <input
                    type="email"
                    onChange={handleRegisterDetails}
                    name="companyEmail"
                    placeholder="Company Email Address"
                    className="border-2 focus:outline-indigo-800 outline-1  border-gray-300 rounded-md p-3 w-full outline-none font-medium block mb-5"
                />
            </div>
            <div className="">
                <input
                    type="text"
                    onChange={handleRegisterDetails}
                    name="companyPhone"
                    placeholder="Company Phone Number"
                    className="border-2 focus:outline-indigo-800 outline-1 border-gray-300 rounded-md p-3 w-full outline-none  font-medium block mb-5"
                />
            </div>
            <div className="md:col-span-2">
                <textarea
                    name="companyAddress"
                    onChange={handleRegisterDetails}
                    placeholder="Company Address"
                    className="border-2 focus:outline-indigo-800 outline-1  border-gray-300 rounded-md p-3 w-full outline-none font-medium block mb-5"
                ></textarea>
            </div>
            <div className="">
                <input
                    type="text"
                    name="companyWebsite"
                    onChange={handleRegisterDetails}
                    placeholder="Company Website"
                    className="border-2 focus:outline-indigo-800 outline-1 border-gray-300 rounded-md p-3 w-full outline-none  font-medium block mb-5"
                />
            </div>
            <div className="">
                <select className="border-2 focus:outline-indigo-800 outline-1 border-gray-300 rounded-md p-3 w-full outline-none  font-medium block mb-5"
                    name="companyBusNumber"
                    onChange={handleRegisterDetails}
                    defaultValue={1}
                >
                    <option defaultValue="Select Bus Number">
                        Select Bus Number
                    </option>
                    <option value="1-10">1 - 10 Buses</option>
                    <option value="11-100">11 - 100 Buses</option>
                    <option value="1-1000">101 - 1000 Buses</option>
                    <option value="1000+">1000+ Buses</option>
                </select>
            </div>
            <div className="">
                <input
                    type="text"
                    name="companyCac"
                    onChange={handleRegisterDetails}
                    placeholder="Company Registration Number"
                    className="border-2 focus:outline-indigo-800 outline-1 border-gray-300 rounded-md p-3 w-full outline-none  font-medium block mb-5"
                />
            </div>
            <div className="">
                <input
                    type="password"
                    name="companyPassword"
                    placeholder="Password"
                    onChange={handleRegisterDetails}
                    className="border-2 focus:outline-indigo-800 outline-1 border-gray-300 rounded-md p-3 w-full outline-none  font-medium block mb-5"
                />
            </div>
            <div className=" mb-4 col-span-2">
                <input
                    type="submit"
                    value="Create Account"
                    className="bg-slate-800 text-white cursor-pointer outline-1 border-gray-300 rounded-md p-3 w-full outline-none font-medium block hover:bg-slate-600"
                />
            </div>
        </form>
    );
}

export default CompanyRegisterForm;