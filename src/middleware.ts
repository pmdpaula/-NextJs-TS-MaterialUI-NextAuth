// eslint-disable-next-line no-restricted-exports
export { default } from 'next-auth/middleware';

// This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
// eslint-disable-next-line react-hooks/rules-of-hooks
// const { data: sessionData, status: sessionStatus } = useSession();
// console.log('MiddlewareFile: ', request.nextUrl);
// return NextResponse.rewrite(request.nextUrl);
// if (sessionStatus === 'unauthenticated')
// return NextResponse.redirect(new URL('/api/auth/singin', request.url));
// }

export const config = {
  matcher: ['/app/:path*', '/admin/:path*', '/user/:path*'],
};
