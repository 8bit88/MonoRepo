import clientPromise from "@lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const { subjectName, mark, dueDate, classId, name } = body;

    const client = await clientPromise;
    const db = client.db("8bitDB");

    const newMark = {
      subjectName,
      mark,
      classId,
      name,
      date: new Date(dueDate),
    };

    const result = await db.collection("Marks").insertOne(newMark);

    return new Response(JSON.stringify(newMark), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Помилка при додаванні оцінки:", err);
    return new Response(JSON.stringify({ error: "Помилка сервера" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
