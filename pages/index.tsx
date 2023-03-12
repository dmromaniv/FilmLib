import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "styles/Home.module.scss";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>FilmLIB</title>
        <meta
          name="description"
          content="Discover new and popular movies. There are a vast selection of movies from various genres that are sure to pique your interest"
        />
        <meta
          name="keywords"
          content="movies, film, cinema, popular movies, movie search"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className="container">
          <h1 className={styles.heading}>
            FilmLIB - discover your next favorite movie
          </h1>
          <div className={styles.contentWrapper}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/cinema.jpg"
                alt="Cinema"
                width={600}
                height={400}
                priority
                className={styles.heroImage}
              />
            </div>
            <div>
              <h2 className={styles.subTitle}>Popular films</h2>
              <ul className={styles.popularFilms}>
                <li>
                  <Link href="/films/potter/1/tt0241527">
                    <span className={styles.filmLink}>
                      Harry Potter and the Sorcerer Stone (2001)
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/films/Forrest Gump/1/tt0109830">
                    <span className={styles.filmLink}>Forrest Gump (1994)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/films/Fight Club/1/tt0137523">
                    <span className={styles.filmLink}>Fight Club (1999)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/films/matrix/1/tt0295432">
                    <span className={styles.filmLink}>The Matrix (1999)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/films/potter/1/tt0304141">
                    <span className={styles.filmLink}>
                      Harry Potter and the Prisoner of Azkaban (2004)
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/films/Shawshank Redemption/1/tt0111161">
                    <span className={styles.filmLink}>
                      The Shawshank Redemption (1994)
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
