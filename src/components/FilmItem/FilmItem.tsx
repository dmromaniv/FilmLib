import Image from "next/image";

import style from "./FilmItem.module.scss";
import { IFilmItemProps } from "./FilmItem.props";

const FilmItem = ({
  Title: title,
  Year: year,
  Poster: poster,
}: IFilmItemProps): JSX.Element => {
  const posterSrc = poster === "N/A" ? "/images/cinema-not-found.jpg" : poster;
  const releaseYear = year === "N/A" ? "no info" : year;

  return (
    <div>
      <Image
        className={style.image}
        src={posterSrc}
        alt={title}
        width={300}
        height={300}
      />

      <div className={style.textContent}>
        <p className={style.title}>{title}</p>
        <p className={style.year}>[release: {releaseYear}]</p>
      </div>
    </div>
  );
};

export default FilmItem;
