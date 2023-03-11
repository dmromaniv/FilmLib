import Link from "next/link";

import SearchBar from "../SearchBar/SearchBar";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={style.contentWrapper}>
          <div className={style.logo}>
            <Link href="/" legacyBehavior>
              <a className={style.link}>filmLIB</a>
            </Link>
          </div>
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
