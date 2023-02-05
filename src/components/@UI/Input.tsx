import { GlobalContext } from "@/context/Global.context";
import style from "@/styles/UI/Input.module.scss";
import { useContext } from "react";

const Input = ({
  type,
  inputName,
  options,
  onChange,
  value,
}: {
  type: "select" | "input" | "textarea";
  inputName: string;
  options?: Array<string>;
  onChange?: (item: any) => void;
  value?: string;
}) => {
  const {setForm, form} = useContext(GlobalContext)
  return (
    <div className={style.input__group}>
      {type === "input" && (
        <>
          <input
            id={inputName}
            className={style.input}
            type="text"
            placeholder=" "
            value={value}
            required
            onChange={onChange}
          />
          <label htmlFor={inputName} className={style.input__label}>
            {inputName}
          </label>
        </>
      )}

      {type === "select" && (
        <>
          <select
            id={inputName}
            className={style.input}
            style={{
              width: "337px",
              backgroundColor: "white",
              marginBottom: "35px",
            }}
            onChange={onChange}
            placeholder=" "
            value={value}
            required
          >
            {options?.map((item, index) => {
              return <option key={index + item}>{item}</option>;
            })}
          </select>
          <label htmlFor={inputName} className={style.select__label}>
            {inputName}
          </label>
        </>
      )}

      {type === "textarea" && (
        <>
          <textarea
            id={inputName}
            className={style.textarea}
            rows={2}
            placeholder=" "
            required
            onChange={onChange}
            value={value}
          />

          <label htmlFor={inputName} className={style.textarea__label}>
            {inputName}
          </label>
          <button
            className={style.clear__button}
            onClick={() => {
              setForm({...form, address: ''})
            }}
          >
            change
          </button>
        </>
      )}
    </div>
  );
};

export default Input;
