import style from "./FilmInfo.module.scss";

const getVerifiedData = (filmsData) => {
  let verifiedData = {};

  Object.entries(filmsData).forEach((el) => {
    if (el[1] === "N/A") {
      el[1] = "Unfortunately, we didn't find any data";
    }
    verifiedData = { ...verifiedData, [el[0]]: el[1] };
  });

  return verifiedData;
};

const FilmInfo = ({
  Title,
  Year,
  Ratings,
  Actors,
  Country,
  Director,
  Genre,
}) => {
  const filmInfo = getVerifiedData({
    Title,
    Year,
    Ratings,
    Actors,
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
                  {filmInfo.Ratings.map((rating) => (
                    <li className={style.ratings} key={rating.Source}>
                      <span className={style.ratingsSource}>
                        {rating.Source}:
                      </span>
                      <span className={style.ratingsScore}>{rating.Value}</span>
                    </li>
                  ))}
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
