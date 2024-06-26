import { NextResponse } from 'next/server'
 
export function middleware(request) {
  const currentUser = request.cookies.get('currentUser')?.value // set in cookies the user role
 
  if (currentUser) {
    return NextResponse.redirect(new URL('/', request.url))  
  }
  return NextResponse.redirect(new URL('/about', request.url))
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}