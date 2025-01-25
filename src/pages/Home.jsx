import axios from "axios";
import { Children, useEffect, useState } from "react";
import { movies_url } from "../globals/api";
import MovieCard from "../components/MovieCard";

function Home() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(movies_url)
            .then((res) => setMovies(res.data))
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(false));
    }, []);

    console.log(movies);

    if (isLoading) return <div>Loading...</div>;
    return (
        <section>
            <h1 className="text-5xl font-semibold text-blue-500 capitalize">
                bool movies
            </h1>
            <h2 className="mt-2 mb-4 uppercase">chosen movies by boolean</h2>
            <CardsContainer>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </CardsContainer>
        </section>
    );
}

function CardsContainer({ children }) {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {children}
        </div>
    );
}

export default Home;
