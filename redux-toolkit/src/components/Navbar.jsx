import { useState } from "react"
import MovieForm from "./movieForm"
import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-slate-950 border-b border-green-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">

        {/* LEFT — Logo */}
        <div className="text-green-400 font-bold text-xl tracking-wide">
          The Watchlist
        </div>

        {/* CENTER — Links (desktop) */}
        <ul className="hidden md:flex mx-auto items-center space-x-8">
          <li>
            <NavLink to="/" className={({isActive}) => `cursor-pointer ${isActive?"text-green-400":"text-gray-400"} hover:text-green-400 transition`}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/watchlist" className={({isActive}) => `cursor-pointer ${isActive?"text-green-400":"text-gray-400"} hover:text-green-400 transition`}>
              My watchlist
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({isActive}) => `cursor-pointer ${isActive?"text-green-400":"text-gray-400"} hover:text-green-400 transition`}>
              About
            </NavLink>
          </li>
        </ul>

        {/* RIGHT — Search (desktop) */}
        <div className="hidden md:block ml-auto">
          <MovieForm />
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="cursor-pointer ml-auto md:hidden text-green-400 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-4">
          <ul className="flex flex-col items-center gap-4 text-gray-400">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `cursor-pointer font-medium transition ${
                      isActive ? "text-green-400" : "text-gray-400 hover:text-green-400"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/watchlist"
                  className={({ isActive }) =>
                    `cursor-pointer transition ${
                      isActive ? "text-green-400" : "text-gray-400 hover:text-green-400"
                    }`
                  }
                >
                  Watchlist
                </NavLink>
              </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `cursor-pointer transition ${
                    isActive ? "text-green-400" : "text-gray-400 hover:text-green-400"
                  }`
                }
              >
                About
              </NavLink>
            </li><MovieForm />
          </ul>
        </div>
      )}
    </nav>
  )
}
