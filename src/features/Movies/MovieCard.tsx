import { Link } from "react-router-dom";
import styles from "./MovieCard.module.scss";
interface MovieCardProp {
  id: number;
  title: string;
  overview: string;
  popularity: number;
}

export function MovieCard({ id, title, overview, popularity }: MovieCardProp) {
  return (
    <div className={styles.card}>
      <img className={styles.thumbnail} src="/AMG_G_63.jpg" alt="img" />
      <div className={styles.content}>
        <Link to={`/movies/${id}`}>{title}</Link>
        <div className={styles.overview}>{overview}</div>
        <div className={styles.popularity}>{popularity}</div>
      </div>
    </div>
  );
}
