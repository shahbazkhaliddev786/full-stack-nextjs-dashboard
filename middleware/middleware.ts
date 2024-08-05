import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
export { default } from 'next-auth/middleware';

export async function middleware(request: any) {
  const token = await getToken({ req: request });
  if (!token) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  if(token){
    if(request.nextUrl.pathname !== "/" ){
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/','/signin'],
};
