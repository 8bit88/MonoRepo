import { google } from "googleapis";

const credentials = {
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  spreadsheetId: process.env.SPREADSHEET_ID,
};

async function getMenuVariants() {
  const auth = new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key,
    ["https://www.googleapis.com/auth/spreadsheets.readonly"]
  );

  const sheets = google.sheets({ version: "v4", auth });

  const range = ["Меню!B2:F10"];

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: credentials.spreadsheetId,
    range: range,
  });

  const rows = res.data.values;

  if (!rows || rows.length === 0) {
    throw new Error("Не вдалося знайти дані в Google таблиці.");
  }

  const days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця"];
  const menu = {};

  rows.forEach((row, index) => {
    const [first1, first2, second1, second2, snack] = row;
    if (!days[index]) return;

    menu[days[index]] = {
      first: [first1, first2].filter(Boolean),
      second: [second1, second2].filter(Boolean),
      snack: [snack].filter(Boolean),
    };
  });

  return menu;
}

export async function GET() {
  try {
    const menu = await getMenuVariants();
    return new Response(JSON.stringify({ success: true, menu }), { status: 200 });
  } catch (error) {
    console.error("Помилка при отриманні меню:", error.message);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
