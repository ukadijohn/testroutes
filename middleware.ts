import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const pathname = req.nextUrl.pathname

    // Require subscription for individual route videos
    if (pathname.startsWith('/test-routes/') && pathname !== '/test-routes') {
      if (!token?.subscribed) {
        return NextResponse.redirect(new URL('/pricing', req.url))
      }
    }

    // Require auth for dashboard
    if (pathname.startsWith('/dashboard')) {
      if (!token) {
        return NextResponse.redirect(new URL('/auth/login?redirect=/dashboard', req.url))
      }
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const pathname = req.nextUrl.pathname
        // Allow unauthenticated access to most pages
        if (pathname.startsWith('/dashboard') || pathname.startsWith('/test-routes/')) {
          return !!token
        }
        return true
      },
    },
  }
)

export const config = {
  matcher: ['/dashboard/:path*', '/test-routes/:path+'],
}
