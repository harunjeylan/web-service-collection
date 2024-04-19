'use server';

import { handleLogin } from './handleLogin';

export async function authenticate(_currentState: unknown, formData: FormData) {
  try {
    const data = {
      username: formData.get('username'),
      password: formData.get('password'),
    };
    await handleLogin('accessToken');
  } catch (error: any) {
    if (error) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
