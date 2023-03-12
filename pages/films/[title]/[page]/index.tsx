import Head from "next/head";
import { GetServerSidePropsContext } from "next";

import FilmList from "@/components/FilmsList";
import Pagination from "@/components/Pagination";
import NotFoundMsg from "@/components/NotFoundMsg";

import { getFilmsByTitle } from "../../../../services/films.services";
import { FilmPreviewDTO } from "@/model/filmsResponseDTO";

type AllFilmsProps = {
  films: FilmPreviewDTO[];
  page: number;
  totalResults: number;
  searchStatus: boolean;
  serverStatus: boolean;
};

export default function AllFilms({
  films,
  page,
  totalResults,
  searchStatus,
  serverStatus,
}: AllFilmsProps) {
  return (
    <>
      <Head>
        <title>Searched films</title>
        <meta
          name="description"
          content="Displayed a list of movies that match your search query"
        />
        <meta
          name="keywords"
          content="movie recommendations,movie list, films, search results"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        {serverStatus ? (
          searchStatus ? (
            <>
              <FilmList films={films} />
              <Pagination currentPage={page} totalPages={totalResults} />
            </>
          ) : (
            <NotFoundMsg message="We did not find any movies for this request. Please try again.." />
          )
        ) : (
          <div className="container">
            <p>
              Oops, we have a problem with the request. Please try again later.
            </p>
          </div>
        )}
      </main>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { title, page } = context?.query;

  const stringTitle = title as string;
  const numberPage = Number(page);

  try {
    const films = await getFilmsByTitle(stringTitle, numberPage);
    const totalResults = Math.floor(+films.totalResults / 10);
    const isRespSuccessful = films.Response === "True" ? true : false;

    return {
      props: {
        films: films.Search || null,
        page: numberPage,
        totalResults,
        searchStatus: isRespSuccessful,
        serverStatus: true,
      },
    };
  } catch (error) {
    return {
      props: { serverRespStatus: false },
    };
  }
}
