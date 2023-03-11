import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import style from "./Pagination.module.scss";

export default function Pagination({ currentPage, totalPages }) {
  const router = useRouter();
  const filmTitle = router.query.title;

  const [startPage, setPages] = useState(+currentPage);

  let endPage = startPage + 4;
  if (endPage > totalPages) {
    endPage = totalPage;
  }

  const handlePrevClick = () => {
    const page = endPage - (endPage - startPage) - 5;
    if (page <= 0) {
      setPages(1);
    } else {
      setPages(page);
    }
  };

  const handleNextClick = () => {
    setPages(endPage + 1);
  };

  return (
    <div className={style.pagination}>
      {startPage > 1 && (
        <button className={style.groupBtn} onClick={handlePrevClick}>
          Prev
        </button>
      )}

      <div className={style.buttons}>
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => startPage + i
        ).map((page) => (
          <Link
            className={style.link}
            key={page}
            href={`/films/${filmTitle}/${page}`}
          >
            <button className={style.button} disabled={+currentPage === page}>
              {page}
            </button>
          </Link>
        ))}
      </div>

      {endPage != totalPages && (
        <button className={style.groupBtn} onClick={handleNextClick}>
          Next
        </button>
      )}
    </div>
  );
}
