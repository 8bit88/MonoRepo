import 'server-only';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function createSession(userId) {
  try {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
    const session = JSON.stringify({ userId, expiresAt });
    const cookieStore = cookies();

    cookieStore.set('session', session, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Secure only in production
      expires: expiresAt,
      sameSite: 'lax',
      path: '/',
    });
  } catch (error) {
    console.error('Error creating session:', error);
    throw new Error('Failed to create session');
  }
}

/**
 * Deletes the session by removing the session cookie.
 */
export async function deleteSession() {
  try {
    const cookieStore = cookies();
    cookieStore.delete('session');
  } catch (error) {
    console.error('Error deleting session:', error);
    throw new Error('Failed to delete session');
  }
}


export async function logout() {
  try {
    await deleteSession();
    redirect('/login');
  } catch (error) {
    console.error('Error during logout:', error);
    throw new Error('Failed to log out');
  }
}


export async function getSession() {
  try {
    const cookieStore = cookies();
    const session = cookieStore.get('session');

    if (!session) {
      return null;
    }

    return JSON.parse(session.value);
  } catch (error) {
    console.error('Error retrieving session:', error);
    return null;
  }
}