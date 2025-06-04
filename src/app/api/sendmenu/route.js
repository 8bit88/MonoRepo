import clientPromise from "@lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();

    const client = await clientPromise;
    const db = client.db("8bitDB");

    const result = await db.collection("Menu").insertOne(body);
    return new Response(JSON.stringify({ ...body, id: result.insertedId }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Помилка при додаванні меню:", err);
    return new Response(JSON.stringify({ error: "Помилка сервера" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
