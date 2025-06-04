import clientPromise from "@lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const { subjectName, description, dueDate, classId } = body;

    const client = await clientPromise;
    const db = client.db("8bitDB");

    const task = {
      subjectName,
      description,
      classId,
      date: new Date(dueDate),
    };

    const result = await db.collection("Tasks").insertOne(task);

    
    return new Response(
      JSON.stringify({ ...task, id: result.insertedId }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Помилка при додаванні завдання:", err);
    return new Response(
      JSON.stringify({ error: "Помилка сервера" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
