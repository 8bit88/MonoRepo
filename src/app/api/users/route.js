
import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";
import { cookies } from "next/headers";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function GET() {
  const cookieStore = cookies();
  const session = cookieStore.get("session");

  if (!session) {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 });
  }

  let userId;

  try {
    const parsedSession = JSON.parse(session.value);
    userId = parsedSession.userId;
  } catch (e) {
    console.error("Invalid session format:", e);
    return NextResponse.json({ error: "Invalid session" }, { status: 400 });
  }

  try {
    await client.connect();
    const db = client.db("8bitDB");
    const collection = db.collection("Users");

    const user = await collection.findOne(
      { _id: new ObjectId(userId) },
      { projection: { name: 1, classId: 1 } }
    );

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (err) {
    console.error("DB error:", err);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
