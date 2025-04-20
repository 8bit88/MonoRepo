import { NextResponse } from "next/server";
import clientPromise from "@lib/mongodb";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    const trimmedEmail = email.trim();
    

    const client = await clientPromise;
    const db = client.db("8bitDB"); 
    

    // Use the correct collection name (case-sensitive)
    const user = await db.collection("Users").findOne({ email: trimmedEmail });
    

    if (!user) {
      return NextResponse.json({ message: "Користувача не знайдено" }, { status: 401 });
    }

    if (user.password !== password) {
      return NextResponse.json({ message: "Невірний пароль" }, { status: 401 });
    }

    return NextResponse.json({
      message: "Вхід успішний",
      user: { email: user.email },
    });
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ message: "Внутрішня помилка сервера" }, { status: 500 });
  }
}
