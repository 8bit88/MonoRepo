import clientPromise from "@lib/mongodb";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const classId = searchParams.get("classId");
  const date = searchParams.get("date");

  if (!classId || !date) {
    return Response.json(
      { error: "Потрібні параметри classId і date" },
      { status: 400 }
    );
  }

  const client = await clientPromise;
  const db = client.db("8bitDB");

  const tasks = await db
    .collection("Tasks")
    .find({ classId, date })
    .toArray();

  if (!tasks.length) {
    return Response.json({ error: "Завдання не знайдено" }, { status: 404 });
  }

  return Response.json({ tasks });
}
