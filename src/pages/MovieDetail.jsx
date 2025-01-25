import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movies_url } from "../globals/api";

function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`${movies_url}/${id}`)
            .then((res) => setMovie(res.data))
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(false));
    }, []);

    console.log(movie.reviews);
    if (isLoading) return <div>Loading...</div>;
    return (
        <>
            <h1 className="text-5xl font-semibold text-blue-500 capitalize">
                {movie.title}
            </h1>
            <h2 className="mt-2 mb-4 text-lg">
                by <em className="text-xl font-semibold">{movie.director}</em>
            </h2>
            <section className="flex flex-col text-lg">
                <span>Genre: {movie.genre}</span>
                <span>Release year: {movie.release_year}</span>
                <span>Overview:</span>
                <p className="p-4 mx-4 my-1 text-base bg-blue-300 bg-opacity-50 rounded-md">
                    {movie.abstract}
                </p>
            </section>
            <section>
                <h2 className="text-lg">Reviews:</h2>
                {movie.reviews &&
                    movie.reviews.map((rev) => (
                        <div className="relative p-4 mx-4 my-1 text-base bg-blue-300 bg-opacity-50 rounded-md">
                            <p>{rev.text}</p>
                            <span className="absolute bottom-0 text-xs right-3">author: {rev.name}</span>
                        </div>
                    ))}
            </section>
        </>
    );
}

export default MovieDetail;
