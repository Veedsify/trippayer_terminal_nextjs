"use client"
import React from "react";
import { redirect } from "next/navigation";
import useAuthStore from "../utils/react_auth_context";

type AuthProviderProps = {
    children: React.ReactNode
}
const AuthProvider = ({ children }: AuthProviderProps) => {
    const { token, user } = useAuthStore()
    if (!token || token.length < 10 && user === null) {
        "use server"
        redirect("/login")
    }
    return <>{children}</>
}

export default AuthProvider;
