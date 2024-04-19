'use server';

import { cookies } from 'next/headers';

export async function handleLogin(accessToken: any) {
  cookies().set('accessToken', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/',
  });
  // Redirect or handle the response after setting the cookie
}

export async function googleRedirect(code: any) {
  const res = await fetch(`http://localhost:8000/auth/google/login`, {
    method: 'POST',
    body: JSON.stringify({ code }),
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });
  const data = await res.json();

  await handleLogin(data.accessToken);

  return true;
}
