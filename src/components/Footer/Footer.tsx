import style from "./Footer.module.scss";

const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className="container">
        <div className={style.contentWrapper}>
          <p>© 2023 Dmytro Romaniv. All rights reserved.</p>
          <p className={style.sourceDesc}>
            This website uses the Open Movie Database (OMDB) API to provide
            movie information.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
