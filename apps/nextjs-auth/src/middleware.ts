import { NextResponse, type NextRequest } from 'next/server';

const protectedRoutes = ['/dashboard'];

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value.length;

  if (accessToken) {
    if (request.nextUrl.pathname.startsWith('/login')) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  if (!accessToken) {
    const isProtected = protectedRoutes.find((route) =>
      request.nextUrl.pathname.startsWith(route),
    );
    console.log({ isProtected });
    if (isProtected) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }

  return NextResponse.next({
    headers: {
      'x-pathname': request.nextUrl.pathname,
    },
  });
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png|.*\\.ico$).*)'],
};
