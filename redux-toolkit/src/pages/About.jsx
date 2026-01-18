export default function About(){
    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">About The Watchlist</h1>
            <p className="mb-2">The Watchlist is a simple React application that allows users to search for movies and add them to their personal watchlist. It leverages the TMDB API to fetch movie data and Redux Toolkit for state management.</p>
            <p className="mb-2">Features:</p>
            <ul className="list-disc list-inside mb-4">
                <li>Search for movies using the TMDB API.</li>
                <li>Add or remove movies from your watchlist.</li>
                <li>View your watchlist with all added movies.</li>
            </ul>
            <p className="mb-2">Technologies Used:</p>
            <ul className="list-disc list-inside">
                <li>React</li>
                <li>Redux Toolkit</li>
                <li>React Router</li>
                <li>TMDB API</li>
                <li>Tailwind CSS</li>
            </ul>
            <p className="mt-4">This project is a demonstration of building a movie watchlist application with modern web development tools and practices.</p>
        </div>
    )
}