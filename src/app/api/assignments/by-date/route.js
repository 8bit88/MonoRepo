// /app/api/assignments/by-date/route.js

import { NextResponse } from "next/server";
import connectDB from  "@lib/mongodb"; 
import Assignment from "../../../models/Assignment";

export async function GET(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const date = searchParams.get("date");
    const classId = searchParams.get("classId");

    if (!date || !classId) {
      return NextResponse.json({ error: "Потрібна дата і клас" }, { status: 400 });
    }

    const assignments = await Assignment.find({ dueDate: date, classId });

    return NextResponse.json(assignments, { status: 200 });
  } catch (error) {
    console.error("Помилка при отриманні завдань:", error);
    return NextResponse.json({ error: "Помилка сервера" }, { status: 500 });
  }
}
