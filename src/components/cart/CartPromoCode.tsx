import style from "@/styles/cart/CartPromoCode.module.scss";
import { useState } from "react";

const CartPromoCode = () => {
  const [show, setShow] = useState(false);
  const [promo, setPromo] = useState<Array<string>>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const deleteCode = (item: string) => {
    const index = promo.indexOf(item);
    let arr = [...promo];
    if (index >= 0) {
      arr.splice(index, 1);
    }
    setPromo(arr);
  };

  return (
    <>
      <div className={style.promo}>
        {!show && (
          <>
            <span className={style.promo__text}>Promo Code? </span>
            <span className={style.promo__enter} onClick={() => setShow(true)}>
              Enter Code
            </span>
          </>
        )}
        {show && (
          <>
            <div className={style.promo__wrapper}>
              <input
                className={style.promo__input}
                placeholder="Coupon Code"
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
                value={inputValue}
              />
              <button
                className={style.promo__button}
                onClick={() => {
                  setPromo(inputValue ? [...promo, inputValue] : promo);
                  setInputValue("");
                }}
              >
                APPLY
              </button>
            </div>
            <div className={style.promo__codes}>
              {promo.map((item, index) => (
                <span key={index} className={style.promo__code}>
                  {item}
                  <span
                    style={{ color: "gray", cursor: "pointer" }}
                    onClick={() => deleteCode(item)}
                  >
                    X
                  </span>
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default CartPromoCode;
