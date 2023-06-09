import Head from "next/head";
import Image from "next/image";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";

import FilmInfo from "@/components/FilmInfo";
import BackButton from "@/components/BackButton";
import NotFoundMsg from "@/components/NotFoundMsg";
import style from "styles/FilmInfoPage.module.scss";

import { getFilmInfoById } from "../../../../services/films.services";
import { FilmDataResponseDTO } from "@/model/filmsResponseDTO";

type FilmProps = {
  film: FilmDataResponseDTO;
  serverStatus: boolean;
  searchStatus?: boolean;
};

export default function FilmDetail({
  film,
  searchStatus,
  serverStatus,
}: FilmProps): JSX.Element {
  const router = useRouter();

  const handleClick = (): void => {
    router.back();
  };

  let posterSrc: string = "",
    filmPlot: string = "";

  if (searchStatus) {
    posterSrc =
      film.Poster === "N/A" ? "/images/cinema-not-found.jpg" : film.Poster;
    filmPlot =
      film.Plot === "N/A"
        ? "Unfortunately, we didn't find any data"
        : film.Plot;
  }

  return (
    <>
      <Head>
        <title>Film Details</title>
        <meta
          name="description"
          content="Detailed information about actors, director, year of release, ratings."
        />
        <meta
          name="keywords"
          content="director, year of release, movie genres,movie ratings, plot"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className="container">
          <BackButton onClick={handleClick} />

          {serverStatus ? (
            searchStatus ? (
              <>
                <div className={style.contentBlock}>
                  <div className={style.imgWrapper}>
                    <Image
                      src={posterSrc}
                      alt={film.Title}
                      width={400}
                      height={400}
                      className={style.image}
                    />
                  </div>
                  <div>
                    <FilmInfo {...film} />
                  </div>
                </div>
                <p className={style.plotDesc}>
                  <span className={style.plotHeading}>
                    Brief plot of the movie:
                  </span>
                  {filmPlot}
                </p>
              </>
            ) : (
              <NotFoundMsg message="We did not find any info for this movie. Please try again.." />
            )
          ) : (
            <p>
              Oops, we have a problem with the request. Please try again later.
            </p>
          )}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const filmId = context.query.id;
  const stringFilmId = filmId as string;

  try {
    const film = await getFilmInfoById(stringFilmId);
    const isRespSuccessful = film.Response === "True" ? true : false;
    return {
      props: { film, searchStatus: isRespSuccessful, serverStatus: true },
    };
  } catch (error) {
    return {
      props: { serverStatus: false },
    };
  }
}
