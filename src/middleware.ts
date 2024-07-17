// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export function middleware(request: NextRequest) {
//     if (request.nextUrl.pathname.startsWith('/dashboard')) {
//         if (!request.cookies.get('_token')) {
//             return NextResponse.redirect(new URL('/auth', request.url))
//         }
//     }
//     return NextResponse.next()
// }
export { default } from 'next-auth/middleware'

export const config = { matcher: ['/dashboard', '/protected/:path*'] }