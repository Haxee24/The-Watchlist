import { useState } from "react"
import { useDispatch } from "react-redux"
import { addMovie } from "../features/watchlist/watchlist"

export default function MovieForm({big}) {
  const [movie, setMovie] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!movie.trim()) return
    dispatch(addMovie(movie))
    setMovie("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2"
    >
      <input
        type="text"
        placeholder="Search movies..."
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
        className={`
          bg-slate-950
          text-gray-100
          px-3 py-1.5
          rounded-md
          border-2 border-green-500
          focus:outline-none
          focus:ring-0
          focus:border-green-500
          active:border-green-500
          placeholder-gray-500
          transition
        `}
      />

      <button
        type="submit"
        className="
          cursor-pointer
          bg-green-500
          hover:bg-green-600
          text-emerald-950
          font-semibold
          px-4 py-1.5
          rounded-md
          transition
          active:scale-95
        "
      >
        Search
      </button>
    </form>
  )
}