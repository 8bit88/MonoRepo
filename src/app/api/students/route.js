import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const classId = searchParams.get('classId');

  if (!classId) {
    return NextResponse.json({ students: [] });
  }

  try {
    await client.connect();
    const db = client.db('8bitDB'); 
    const collection = db.collection('Users');

    const students = await collection
      .find({ classId })
      .project({ _id: 1, name: 1 }) 
      .toArray();

    return NextResponse.json({ students });
  } catch (err) {
    console.error('DB error:', err);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}
