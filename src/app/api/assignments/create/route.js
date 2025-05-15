// /app/api/assignments/create/route.js

import { NextResponse } from "next/server";
import connectDB from  "@lib/mongodb"; 
import Assignment from "../../../models/Assignment";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const { teacherId, subjectName, description, dueDate, classId } = body;

    if (!teacherId || !subjectName || !description || !dueDate || !classId) {
      return NextResponse.json({ error: "Усі поля обов’язкові" }, { status: 400 });
    }

    const newAssignment = await Assignment.create({
      teacherId,
      subjectName,
      description,
      dueDate,
      classId,
    });

    return NextResponse.json({ success: true, assignment: newAssignment }, { status: 201 });
  } catch (error) {
    console.error("Помилка при створенні завдання:", error);
    return NextResponse.json({ error: "Внутрішня помилка сервера" }, { status: 500 });
  }
}
