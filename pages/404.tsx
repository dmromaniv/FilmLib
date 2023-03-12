import Image from "next/image";
import Link from "next/link";

import style from "styles/NotFoundPage.module.scss";

const NotFound = (): JSX.Element => {
  return (
    <main>
      <div className="container">
        <div className={style.contentWrapper}>
          <h1 className={style.heading}>Something went wrong...</h1>
          <p>
            Go to{" "}
            <Link href="/" legacyBehavior>
              <a className={style.link}>Home</a>
            </Link>
          </p>

          <Image
            src="/images/error-404.webp"
            alt="Cinema"
            width={400}
            height={400}
            className={style.image}
          />
        </div>
      </div>
    </main>
  );
};

export default NotFound;
