import { NextResponse } from 'next/server'
import { TOKEN_NAME } from './constants/cookies'
import { LOGIN_PATH } from './utils/path/internalPaths'

const locales = ['vi', 'en']

export async function middleware(request) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get(TOKEN_NAME)
  const isAuthenticated = request.cookies.has(TOKEN_NAME)

  const authPages = [LOGIN_PATH]
  const publicPages = []

  const authPathnameRegex = new RegExp(`^(/(${locales.join('|')})?)?(${authPages.join('|')})/?$`, 'i')
  const publicPathnameRegex =
    publicPages.length > 0 ? new RegExp(`^(/(${locales.join('|')})?)?(${publicPages.join('|')})/?$`, 'i') : null

  // Check if current route is an authentication or public route
  const isAuthRoute = authPathnameRegex.test(request.nextUrl.pathname)

  // Check if current route is a public route, default to false if publicPages is empty
  const isPublicRoute = publicPathnameRegex ? publicPathnameRegex.test(request.nextUrl.pathname) : false

  if (isAuthenticated && isAuthRoute) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  //If the user is not authenticated and the route is neither public nor auth, redirect to the login page.
  if (!isAuthenticated && !isPublicRoute && !isAuthRoute) {
    return NextResponse.redirect(new URL(LOGIN_PATH, request.url))
  } else {
    return NextResponse.next()
  }
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!_next|.*\\..*).*)'],
}
