import Image from "next/image";

import style from "./NotFoundMsg.module.scss";

const NotFoundMsg = ({ message }: { message: string }): JSX.Element => {
  return (
    <div className="container">
      <div className={style.contentWrapper}>
        <p className={style.text}>{message}</p>
        <Image
          src="/images/film-not-found.png"
          alt="film not found"
          width={150}
          height={150}
          className={style.image}
        />
      </div>
    </div>
  );
};

export default NotFoundMsg;
