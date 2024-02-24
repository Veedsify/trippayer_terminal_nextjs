import CreateSubAccounts from "@/app/components/createSubAccounts";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create Subaccounts",
    description: "Create Subaccounts",
}


const page = () => {
    return (
        <>
            <CreateSubAccounts />
        </>
    );
}

export default page;