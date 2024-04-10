import { Movie } from "../../reducers/movies";
import { RootState } from "../../store";
import { connect } from "react-redux";
import { MovieCard } from "./MovieCard";
import styles from "./Movies.module.scss";
import { useEffect, useState } from "react";
import { client } from "../../api/tmdb";

export function MoviesFetch() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await client.getNowPlaying();
      setMovies(response.results);
    }
    loadData();
  }, []);

  return <Movies movies={movies} />;
}
interface MoviesProps {
  movies: Movie[];
}

function Movies({ movies }: MoviesProps) {
  return (
    <section>
      <div className={styles.list}>
        {movies.map((m) => (
          <MovieCard
            key={m.id}
            id={m.id}
            title={m.title}
            overview={m.overview}
            popularity={m.popularity}
          />
        ))}
      </div>
    </section>
  );
}

const mapStateToProps = (state: RootState) => ({
  movies: state.movies.top,
});
const connector = connect(mapStateToProps);
export default connector(Movies);
