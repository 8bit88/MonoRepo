import clientPromise from "@lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("8bitDB");

    const menus = await db.collection("Menu").find({}).toArray();

    return new Response(JSON.stringify({ menus }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Помилка отримання меню:", error);
    return new Response(
      JSON.stringify({ error: "Помилка сервера" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
