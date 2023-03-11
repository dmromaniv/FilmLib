import Image from "next/image";

import style from "./FilmItem.module.scss";

const FilmItem = ({ Title, Year, Poster }) => {
  const posterSrc = Poster === "N/A" ? "/images/cinema-not-found.jpg" : Poster;
  const releaseYear = Year === "N/A" ? "no info" : Year;

  return (
    <div >
      <Image
        className={style.image}
        src={posterSrc}
        alt={Title}
        width={300}
        height={300}
      />

      <div className={style.textContent}>
        <p className={style.title}>{Title}</p>
        <p className={style.year}>[release: {releaseYear}]</p>
      </div>
    </div>
  );
};

export default FilmItem;
