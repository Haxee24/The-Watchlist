import { useState } from "react"
import MovieForm from "./movieForm"

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
            <a className="cursor-pointer text-green-400 font-medium">Home</a>
          </li>
          <li>
            <a className="cursor-pointer text-gray-400 hover:text-green-400 transition">
              My watchlist
            </a>
          </li>
          <li>
            <a className="cursor-pointer text-gray-400 hover:text-green-400 transition">
              About
            </a>
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
            <li className="text-green-400 cursor-pointer font-medium">Home</li>
            <li className="hover:text-green-400 cursor-pointer transition">Features</li>
            <li className="hover:text-green-400 cursor-pointer transition">Pricing</li>
            <li className="hover:text-green-400 cursor-pointer transition">Contact</li>
            <MovieForm />
          </ul>
        </div>
      )}
    </nav>
  )
}
