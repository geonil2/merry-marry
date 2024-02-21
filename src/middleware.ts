import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

import { PATH_ADMIN } from '@/routes/paths';

const secret = process.env.AUTH_SECRET;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = await getToken({ req: request, secret, raw: false });

  if (pathname === PATH_ADMIN.root && session)
    return NextResponse.redirect(new URL(PATH_ADMIN.dashboard, request.url));

  if (!session)
    return NextResponse.redirect(new URL(PATH_ADMIN.root, request.url));
}

export const config = {
  matcher: [`/admin/:path*`],
};
