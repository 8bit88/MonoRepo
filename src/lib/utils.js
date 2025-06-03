import clientPromise from "@lib/mongodb";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export async function rehashPlainPasswords() {
  const client = await clientPromise;
  const db = client.db("8bitDB");
  const users = await db.collection("Users").find({}).toArray();

  for (const user of users) {
    // Якщо пароль вже схожий на bcrypt-хеш (починається з $2), пропускаємо
    if (typeof user.password === "string" && user.password.startsWith("$2")) continue;

    const hashed = await bcrypt.hash(user.password, SALT_ROUNDS);
    await db.collection("Users").updateOne(
      { _id: user._id },
      { $set: { password: hashed } }
    );
    console.log(`User ${user.email} password hashed`);
  }
  console.log("Done rehashing users.");
}