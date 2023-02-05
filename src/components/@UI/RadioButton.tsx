import style from "@/styles/UI/RadioButton.module.scss";

const RadioButton = ({
  title,
  price,
  onChange,
  defaultChecked,
}: {
  title: string;
  price: number;
  onChange?: (item: any) => void;
  defaultChecked?: boolean;
}) => {
  return (
    <div className={style.radio}>
      <input
        type="radio"
        defaultChecked={defaultChecked}
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
