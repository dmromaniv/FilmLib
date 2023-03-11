import style from "./BackButton.module.scss";

const Footer = ({ onClick }) => {
  return (
    <button onClick={onClick} className={style.button}>
      Go back
    </button>
  );
};

export default Footer;
