/* eslint-disable space-before-function-paren */
// eslint-disable-next-line no-unused-vars
import Link from 'next/link'

const routes = [
  {
    name: 'Home',
    route: '/'
  },
  {
    name: 'Gallery',
    route: '/gallery'
  },
  {
    name: 'Videos',
    route: '/videos'
  },
  {
    name: 'Book Now',
    route: '/book-now'
  }
]

export default function NavBar() {
  return (
    <nav className='flex gap-10'>
      {routes.map((link) => {
        return (
          <ul>
            <li key={link.name}>
              <Link
                className='text-white text-2xl'
                href={link.route}
                key={link.name}
              >
                {link.name}
              </Link>
            </li>
          </ul>
        )
      })}
    </nav>
  )
}
