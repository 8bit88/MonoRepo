import clientPromise from "@lib/mongodb";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const classId = searchParams.get("classId");
  const date = searchParams.get("date");

  const dateParam = searchParams.get("date");

  if (!classId || !dateParam) {
    return Response.json(
      { error: "Потрібні параметри classId і date" },
      { status: 400 }
    );
  }

  const client = await clientPromise;
  const db = client.db("8bitDB");

  const dayStart = new Date(dateParam);
  dayStart.setUTCHours(0, 0, 0, 0);
  const dayEnd = new Date(dateParam);
  dayEnd.setUTCHours(23, 59, 59, 999);

  const tasks = await db
    .collection("Tasks")
    .find({
      classId,
      date: {
        $gte: dayStart,
        $lt: dayEnd,
      },
    })
    .toArray();

  if (!tasks.length) {
    return Response.json({ error: "Завдання не знайдено" }, { status: 404 });
  }

  return Response.json({ tasks });
}
