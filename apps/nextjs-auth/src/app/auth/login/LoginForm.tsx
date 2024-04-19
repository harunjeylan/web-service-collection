'use client';

import { authenticate } from 'apps/web/src/data/actions';
import { useRouter } from 'next/navigation';
import { useFormState, useFormStatus } from 'react-dom';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  const router = useRouter();

  return (
    <form action={dispatch}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <div>{errorMessage && <p>{errorMessage}</p>}</div>
      <LoginButton />
      <div className="h-[1px] w-full bg-slate-300 "></div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <button
      aria-disabled={pending}
      type="submit"
      className="border hover:bg-slate-600"
    >
      Login
    </button>
  );
}
