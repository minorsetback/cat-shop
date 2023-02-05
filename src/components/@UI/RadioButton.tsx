import style from "@/styles/UI/RadioButton.module.scss";

const RadioButton = ({
  title,
  price,
  onChange,
}: {
  title: string;
  price: number;
  onChange?: (item: any) => void;
}) => {
  return (
    <div className={style.radio}>
      <input
        type="radio"
        className={style.radio__input}
        name="radio"
        onChange={onChange}
      />
      <div className={style.radio__info}>
        <span className={style.radio__title}>{title}</span>
        <span className={style.radio__price}>$ {price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default RadioButton;
