import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function middleware(req: NextRequest) {
  const cookieStore = req.cookies

  if (!cookieStore.get("token")?.value) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const checkToken = async () => {
    const checkToken = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/Company`
    );
    const data = await checkToken.json();
    if (data.status === 400 && data.success === false) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  };
  checkToken();
}

export const config = {
  matcher: [
    "/",
    "/bookings/:page*",
    "/subaccounts/:page*",
    "/settings/:page*",
    "/plans/:page*",
    "/travellers/:page*",
  ],
};
