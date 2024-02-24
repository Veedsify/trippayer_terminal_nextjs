import { cookies } from 'next/headers'

type SubAccountType = {
    _id: string,
    business_name: string,
    account_number: string,
    settlement_bank: string
}
const ViewSubaccounts = async () => {
    const cookieStore = cookies()
    const token = cookieStore.get('token')
    const getSubaccounts = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}//bank/subaccount`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token?.value}`
            },
        });
        const data = await res.json();
        return data.payload
    }

    const subaccounts = await getSubaccounts() as SubAccountType
    return (
        <div>
            <div className="py-5">
                <div className="bg-white shadow-md rounded-md p-4">
                    <div>
                        <h2 className="font-bold text-lg md:text-xl px-3 mb-5">
                            My Accounts:
                        </h2>
                        <div>
                            <table className="table-auto">
                                <thead>
                                    <tr>
                                        <th className="text-left border px-6 text-xl py-4 font-bold">S/N</th>
                                        <th className="text-left border px-6 text-xl py-4 font-bold">Business Name</th>
                                        <th className="text-left border px-6 text-xl py-4 font-bold">Account Number</th>
                                        <th className="text-left border px-6 text-xl py-4 font-bold">Bank Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr key={subaccounts._id}>
                                        <td className="text-left border px-6 text-lg py-4">1</td>
                                        <td className="text-left border px-6 text-lg py-4">{subaccounts.business_name}</td>
                                        <td className="text-left border px-6 text-lg py-4">{subaccounts.account_number}</td>
                                        <td className="text-left border px-6 text-lg py-4">{subaccounts.settlement_bank}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewSubaccounts;