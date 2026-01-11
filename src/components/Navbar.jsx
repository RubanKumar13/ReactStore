import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-white border-b max-w-7xl mx-auto">
      <div className="container flex items-center justify-between py-4 mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-xl font-semibold">React Store</div>
        <nav className="flex gap-6">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `text-sm ${isActive ? 'text-blue-600 font-medium' : 'text-gray-700'}`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `text-sm ${isActive ? 'text-blue-600 font-medium' : 'text-gray-700'}`
            }
          >
            Admin
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
