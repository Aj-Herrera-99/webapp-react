function MovieCard({movie}) {
  return (
      <div key={movie.id} className="bg-blue-300">
          <div className="flex flex-col">
              <h3 className="text-xl font-semibold tracking-wider">
                  {movie.title}
              </h3>
              <span>
                  by <em className="text-lg">{movie.director}</em>
              </span>
              <p className="mt-3">{movie.abstract}</p>
          </div>
      </div>
  );
}

export default MovieCard