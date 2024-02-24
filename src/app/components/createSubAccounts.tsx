"use client";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

type Bank = {
    "id": number,
    "name": string,
    "code": string
}

type CreateSubAccount = {
    "bank_code": string,
    "account_number": string,
    "business_name": string
}

const CreateSubAccounts = () => {
    const router = useRouter()
    const [banks, setBanks] = useState<Bank[] | null>(null)
    const [subAccount, setSubAccount] = useState<CreateSubAccount | any>(null)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const requestBankCode = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bank/all`);
            const data = await res.json();
            setBanks(data.payload)
        }
        requestBankCode()
    }, [])

    const handleBankSelect = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        setSubAccount({
            ...subAccount,
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    const createSubAccount = async () => {
        if (!subAccount) return swal("Error", "Please fill all fields", "error")
        if (!subAccount.bank_code || !subAccount.account_number || !subAccount.business_name) return swal("Error", "Please fill all fields", "error")
        if (subAccount.account_number.length < 10) return swal("Error", "Account number must be 10 digits", "error")
        setLoading(true)
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bank/create-subaccount`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${document.cookie.split("token=")[1] || ""}`
            },
            body: JSON.stringify(subAccount)
        });
        const data = await res.json();
        if (data.status === 400) {
            setLoading(false)
            return swal("Error", data.message, "error")
        }
        setLoading(false)

        return swal("Success", data.message, "success").then(res => {
            if (res) {
                router.push("/subaccounts/view")
            }
        })
    }

    return (
        <div>
            <h1 className="text-white font-bold md:text-3xl text-2xl mb-5">
                Create Sub Accounts
            </h1>
            <div className="py-5">
                <div className="bg-white shadow-md rounded-md p-4">
                    <div className="grid md:grid-cols-2 gap-5">
                        <div>
                            <div>
                                <label className=" font-semibold block mb-2">
                                    Business Name
                                </label>
                                <input
                                    onChange={handleBankSelect}
                                    name="business_name"
                                    type="text"
                                    className="w-full border rounded-md p-3 block mb-4"
                                />
                            </div>
                            <div>
                                <label className=" font-semibold block mb-2">
                                    Bank Code
                                </label>
                                <select
                                    onChange={handleBankSelect}
                                    name="bank_code"
                                    className="w-full border rounded-md p-3 block mb-4"
                                    defaultValue={"selected"}
                                >
                                    <option value={"selected"} disabled>Select Bank</option>
                                    {
                                        banks && banks?.map((bank: any) => (
                                            <option
                                                key={bank.id} value={bank.code}>{bank.name}: {bank.code}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div>
                                <label className=" font-semibold block mb-2">
                                    Account Number
                                </label>
                                <input
                                    maxLength={10}
                                    type="text"
                                    name="account_number"
                                    onChange={handleBankSelect}
                                    className="w-full border rounded-md p-3 block mb-4"
                                />
                            </div>
                            <div>
                                <button
                                    onClick={createSubAccount}
                                    type="submit"
                                    disabled={loading}
                                    className="w-full border bg-slate-900 text-white font-bold rounded-md p-3 block mb-4 cursor-pointer"
                                >
                                    {
                                        loading ? "Creating..." : "Create Sub Account"
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateSubAccounts;