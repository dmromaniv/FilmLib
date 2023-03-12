import style from "./BackButton.module.scss";
import { IBackButtonProps } from "./BackButton.props";

const BackButton = ({ onClick }: IBackButtonProps): JSX.Element => {
  return (
    <button onClick={onClick} className={style.button}>
      Go back
    </button>
  );
};

export default BackButton;
