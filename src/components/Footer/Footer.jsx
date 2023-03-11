import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={style.contentWrapper}>
          <p>© 2023 Dmytro Romaiv. All rights reserved.</p>
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
