'use client';

import { googleRedirect } from 'apps/web/src/data/handleLogin';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default async function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    async function handleGoogleLogin() {
      const logIn = await googleRedirect(searchParams.get('code'));
      if (logIn) {
        router.push('/dashboard');
      }
    }
    handleGoogleLogin();
  }, []);

  return <div>Page</div>;
}
