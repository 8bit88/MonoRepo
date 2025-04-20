import { google } from 'googleapis';

const credentials = {
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  spreadsheetId: process.env.SPREADSHEET_ID,
};

<<<<<<< HEAD
async function sendDataToSheet(dataArray) {
=======
async function sendDataToSheet(data, sheetIndex) {
>>>>>>> 0c434a7701dd977b0a6f033a0a8cfcc9995f906e
  const auth = new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
  );

  const sheets = google.sheets({ version: 'v4', auth });

<<<<<<< HEAD
  const ranges = ['Пн!B2:F100', 'Вт!B2:F100', 'Ср!B2:F100', 'Чт!B2:F100', 'Пт!B2:F100'];

  const responses = await Promise.all(
    dataArray.map((data, index) => {
      return sheets.spreadsheets.values.append({
        spreadsheetId: credentials.spreadsheetId,
        range: ranges[index],
        valueInputOption: 'RAW',
        requestBody: {
          values: [[data.first, data.second, data.snack]],
        },
      });
    })
  );

  return responses;
=======
  const ranges = [
    'Пн!A2:F10',
    'Вт!A2:F10',
    'Ср!A2:F10',
    'Чт!A2:F10',
    'Пт!A2:F10'
  ];

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: credentials.spreadsheetId,
    range: ranges[sheetIndex], // Use the sheetIndex to select the range dynamically
    valueInputOption: 'RAW',
    requestBody: {
      values: [data],
    },
  });

  return response.data;
>>>>>>> 0c434a7701dd977b0a6f033a0a8cfcc9995f906e
}

export async function POST(req) {
  try {
<<<<<<< HEAD
    const { allDaysData } = await req.json();
    await sendDataToSheet(allDaysData);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
=======
    const formData = await req.json();
    const result = await sendDataToSheet(
      [formData.name, formData.first, formData.second, formData.snack],
      formData.sheetIndex // Pass the sheetIndex to the backend
    );
    return new Response(JSON.stringify({ success: true, result }), { status: 200 });
>>>>>>> 0c434a7701dd977b0a6f033a0a8cfcc9995f906e
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
