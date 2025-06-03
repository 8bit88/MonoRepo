import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017"; // або URI від MongoDB Atlas
const client = new MongoClient(uri);
const dbName = "school";

const schedule = {
  Понеділок: [
    { subject: "Математика", time: "8:30 - 9:30" },
    { subject: "Хімія", time: "9:45 - 10:45" },
    { subject: "Англійська мова", time: "11:00 - 12:00" },
    "Обідня перерва",
    { subject: "Історія України", time: "1:00 - 2:00" },
    { subject: "Мистецтво", time: "2:15 - 3:15" },
  ],
  Вівторок: [
    { subject: "Фізика", time: "8:30 - 9:30" },
    { subject: "Біологія", time: "9:45 - 10:45" },
    { subject: "Українська мова", time: "11:00 - 12:00" },
    "Обідня перерва",
    { subject: "Географія", time: "1:00 - 2:00" },
    { subject: "Фізкультура", time: "2:15 - 3:15" },
  ],
  // інші дні...
};

async function seed() {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("schedule");

    await collection.deleteMany({});
    const docs = Object.entries(schedule).map(([day, lessons]) => ({
      day,
      lessons,
    }));

    await collection.insertMany(docs);
    console.log("Дані розкладу успішно додано!");
  } catch (err) {
    console.error("Помилка при додаванні даних:", err);
  } finally {
    await client.close();
  }
}

seed();
