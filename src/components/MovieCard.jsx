import { Link } from "react-router-dom";

function MovieCard({ movie }) {
    return (
        <div key={movie.id} className="p-3 bg-blue-300">
            <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold tracking-wider">
                    {movie.title}
                </h3>
                <span>
                    by <em className="text-lg">{movie.director}</em>
                </span>
                <p className="my-3">{movie.abstract}</p>
                <Badge id={movie.id} />
            </div>
        </div>
    );
}

function Badge({ id }) {
    return (
        <Link
            to={`movies/${id}`}
            className="px-4 py-1 text-white transition-all scale-95 bg-blue-500 rounded-md w-fit hover:scale-100"
        >
            See more
        </Link>
    );
}

export default MovieCard;
