import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movies_url } from "../globals/api";
import Rating from "../components/Rating";

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
                        <div key={rev.id} className="relative flex items-center justify-between p-4 mx-4 my-1 text-base bg-blue-300/50 rounded-md">
                            <p>{rev.text}</p>
                            <div className="flex gap-1 text-yellow-500">
                                <Rating stars={rev.vote}/>
                            </div>
                            <span className="absolute bottom-0 text-xs right-3">author: {rev.name}</span>
                        </div>
                    ))}
            </section>
            <FormSection/>
        </>
    );
}

function FormSection() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit-btn clicked")
    };
    return (
        <section className="my-8 md:mx-16 mx-8">
            <form
                onSubmit={handleSubmit}
                className="rounded-md pb-2 border border-stone-400 flex flex-col gap-3 [&>*]:px-3
                        "
            >
                <h2 className="py-3 border-b border-b-stone-400 bg-blue-300/50 font-semibold text-xl">
                    Add your review
                </h2>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Name</label>
                    <input
                        className="p-2 rounded-md border border-stone-400"
                        type="text"
                        name="name"
                        id="name"
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="review">Review</label>
                    <textarea
                        className="p-2 rounded-md border border-stone-400"
                        name="review"
                        id="review"
                        required
                    ></textarea>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="vote">Vote</label>
                    <input
                        className="p-2 rounded-md border border-stone-400"
                        type="number"
                        name="vote"
                        id="vote"
                        min={0}
                        max={5}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue mr-2 rounded-md py-2 px-5 bg-blue-700 text-white self-end scale-90 hover:scale-100"
                >
                    Send
                </button>
            </form>
        </section>
    );
}

export default MovieDetail;
