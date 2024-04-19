import Link from 'next/link';
import LoginForm from './LoginForm';

export default async function Page() {
  const authUrl = await googleLogin();
  return (
    <div className="flex flex-col gap-2 max-w-md mx-auto my-8 py-4 px-4 border">
      <LoginForm />
      {authUrl && (
        <Link
          href={authUrl}
          target="_blank"
          className="border hover:bg-slate-600"
        >
          google
        </Link>
      )}
    </div>
  );
}

async function googleLogin() {
  const res = await fetch(`http://localhost:8000/auth/google/url`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });
  const data = await res.json();
  if (!data.authUrl) {
    return null;
  }
  return data.authUrl;
}
