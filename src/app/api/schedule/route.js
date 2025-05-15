const mockSchedules = {
  "1": [
    {
      day: "Понеділок",
      lessons: [
        { subject: "Математика", time: "08:30 - 09:15" },
        { subject: "Українська мова", time: "09:25 - 10:10" },
      ],
    },
    {
      day: "Вівторок",
      lessons: [
        { subject: "Історія", time: "08:30 - 09:15" },
        { subject: "Фізкультура", time: "09:25 - 10:10" },
      ],
    },
  ],
  "2": [
    {
      day: "Понеділок",
      lessons: [
        { subject: "Англійська", time: "08:30 - 09:15" },
        { subject: "Природознавство", time: "09:25 - 10:10" },
      ],
    },
    {
    day: "Вівторок",
    lessons: [
      { subject: "Українська мова", time: "08:30 - 09:15" },
      { subject: "Англійська", time: "09:25 - 10:10" },
      { subject: "Математика", time: "10:30 - 11:15" },
      { subject: "Трудове навчання", time: "11:25 - 12:10" },
      { subject: "Фізкультура", time: "12:20 - 13:05" },
    ],
  },
  {
    day: "Середа",
    lessons: [
      { subject: "Математика", time: "08:30 - 09:15" },
      { subject: "Читання", time: "09:25 - 10:10" },
      { subject: "Українська мова", time: "10:30 - 11:15" },
      { subject: "Природознавство", time: "11:25 - 12:10" },
      { subject: "Музика", time: "12:20 - 13:05" },
    ],
  },
  {
    day: "Четвер",
    lessons: [
      { subject: "Фізкультура", time: "08:30 - 09:15" },
      { subject: "Англійська", time: "09:25 - 10:10" },
      { subject: "Математика", time: "10:30 - 11:15" },
      { subject: "Читання", time: "11:25 - 12:10" },
      { subject: "Інформатика", time: "12:20 - 13:05" },
    ],
  },
  {
    day: "П’ятниця",
    lessons: [
      { subject: "Українська мова", time: "08:30 - 09:15" },
      { subject: "Природознавство", time: "09:25 - 10:10" },
      { subject: "Математика", time: "10:30 - 11:15" },
      { subject: "Малювання", time: "11:25 - 12:10" },
      { subject: "Фізкультура", time: "12:20 - 13:05" },
    ],
  },
  ],
};

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const classId = searchParams.get("classId");

  if (!classId) {
    return Response.json({ error: "Потрібен параметр classId" }, { status: 400 });
  }

  const schedule = mockSchedules[classId];

  if (!schedule) {
    return Response.json({ error: "Розклад для цього класу не знайдено" }, { status: 404 });
  }

  return Response.json({ schedule });
}
