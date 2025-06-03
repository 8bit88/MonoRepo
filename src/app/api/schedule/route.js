import clientPromise from "@lib/mongodb";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const classId = searchParams.get("classId");

  if (!classId) {
    return Response.json(
      { error: "Потрібен параметр classId" },
      { status: 400 }
    );
  }


  const client = await clientPromise;
  const db = client.db("8bitDB");

  const schedule= await db

    .collection("Timetable")
    .findOne({ classId: classId });
  console.log({ schedule });
  if (!schedule) {
    return Response.json(
      { error: "Розклад для цього класу не знайдено" },
      { status: 404 }
    );
  }

  return Response.json({ schedule });
}
