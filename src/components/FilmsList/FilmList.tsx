import Link from "next/link";
import { useRouter } from "next/router";

import FilmItem from "../FilmItem/FilmItem";
import style from "./FilmList.module.scss";
import { FilmPreviewDTO } from "@/model/filmsResponseDTO";

const FilmList = ({ films }: { films: FilmPreviewDTO[] }): JSX.Element => {
  const router = useRouter();

  return (
    <div className="container">
      <ul className={style.list}>
        {films.map((film) => (
          <li key={film.imdbID} className={style.item}>
            <Link href={`${router.asPath}/${film.imdbID}`}>
              <FilmItem {...film} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilmList;
