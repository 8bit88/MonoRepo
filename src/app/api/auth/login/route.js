import { NextResponse } from "next/server";
import clientPromise from "@lib/mongodb";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    const trimmedEmail = email.trim();

    const client = await clientPromise;
    const db = client.db("8bitDB");

    const user = await db.collection("Users").findOne({ email: trimmedEmail });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 401 });
    }

    if (user.password !== password) {
      return NextResponse.json(
        { message: "Incorrect password" },
        { status: 401 }
      );
    }

    if (!user.role) {
      return NextResponse.json(
        { message: "User has no role assigned" },
        { status: 400 }
      );
    }

    //  cookie
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const sessionData = JSON.stringify({
      userId: user._id.toString(),
      role: user.role,
       name: user.name,
      expiresAt,
    });

    const response = NextResponse.json({
      message: "Login successful",
      user: {
        email: user.email,
        classId: user.classId || null,
        role: user.role,
         name: user.name,
      },
    });

    response.cookies.set("session", sessionData, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: expiresAt,
      sameSite: "lax",
      path: "/",
    });

    return response;
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
