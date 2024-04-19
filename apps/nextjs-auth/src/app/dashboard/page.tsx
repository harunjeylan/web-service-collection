import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function Page() {
  const user = await getMe();
  return <div>{JSON.stringify(user)}</div>;
}

async function getMe() {
  const cookieStore = cookies();
  if (!cookieStore.has('accessToken')) {
    return redirect('/auth/login');
  }
  const accessToken = cookieStore.get('accessToken')?.value;
  const res = await fetch(`http://localhost:8000/auth/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    cache: 'no-store',
  });
  const data = await res.json();
  return data;
}
