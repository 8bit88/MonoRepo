// /app/api/assignments/teacher/route.js

import { NextResponse } from "next/server";
import connectDB from  "@lib/mongodb"; 
import Assignment from "../../../models/Assignment";

export async function GET(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const teacherId = searchParams.get("teacherId");

    if (!teacherId) {
      return NextResponse.json({ error: "Потрібен teacherId" }, { status: 400 });
    }

    const assignments = await Assignment.find({ teacherId });

    return NextResponse.json(assignments, { status: 200 });
  } catch (error) {
    console.error("Помилка при отриманні завдань:", error);
    return NextResponse.json({ error: "Помилка сервера" }, { status: 500 });
  }
}
