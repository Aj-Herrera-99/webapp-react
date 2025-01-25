import axios from "axios";
import { useEffect, useState } from "react";
import { movies_url } from "../globals/api";

function Home() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(movies_url)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) return <div>Loading...</div>;
    return (
        <section>
            <h1 className="text-5xl font-semibold text-blue-500 capitalize">
                bool movies
            </h1>
            <h2 className="mt-2 mb-4 uppercase">chosen movies by boolean</h2>
            <div>Home</div>
        </section>
    );
}

export default Home;
