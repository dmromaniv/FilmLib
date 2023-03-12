import style from "./FilmInfo.module.scss";
import { IFilmInfo } from "./FilmInfo.props";

const getVerifiedData = (filmsData: IFilmInfo): IFilmInfo => {
  for (const key in filmsData) {
    if (filmsData.hasOwnProperty(key)) {
      if (filmsData[key] === "N/A") {
        filmsData[key] = "Unfortunately, we didn't find any data";
      }
    }
  }
  return filmsData;
};

const FilmInfo = ({
  Title,
  Year,
  Ratings,
  Actors,
  Country,
  Director,
  Genre,
}: IFilmInfo): JSX.Element => {
  const filmInfo = getVerifiedData({
    Title,
    Year,
    Actors,
    Ratings,
    Country,
    Director,
    Genre,
  });

  return (
    <>
      <p className={style.title}>{filmInfo.Title}</p>
      <table className={style.table}>
        <tbody>
          <tr>
            <th className={style.tHeading}>Year</th>
            <td className={style.tData}>{filmInfo.Year}</td>
          </tr>
          <tr>
            <th className={style.tHeading}>Genre</th>
            <td className={style.tData}>{filmInfo.Genre}</td>
          </tr>
          <tr>
            <th className={style.tHeading}>Director</th>
            <td className={style.tData}>{filmInfo.Director}</td>
          </tr>
          <tr>
            <th className={style.tHeading}>Country</th>
            <td className={style.tData}>{filmInfo.Country}</td>
          </tr>
          <tr>
            <th className={style.tHeading}>Actors</th>
            <td className={style.tData}>{filmInfo.Actors}</td>
          </tr>
          <tr>
            <th className={style.tHeading}>Ratings</th>
            <td className={style.tData}>
              {
                <ul>
                  {filmInfo.Ratings.length == 0 ? (
                    <li>There is any ratings</li>
                  ) : (
                    filmInfo.Ratings.map((rating) => (
                      <li className={style.ratings} key={rating.Source}>
                        <span className={style.ratingsSource}>
                          {rating.Source}:
                        </span>
                        <span className={style.ratingsScore}>
                          {rating.Value}
                        </span>
                      </li>
                    ))
                  )}
                </ul>
              }
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default FilmInfo;
