import clientPromise from "@lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("8bitDB");

    const marks = await db.collection("Marks").find({}).toArray();
    marks.forEach((m) => {
      m.mark = Number(m.mark);
    });

    return new Response(JSON.stringify({ marks }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Помилка отримання оцінок:", error);
    return new Response(JSON.stringify({ error: "Помилка сервера" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
