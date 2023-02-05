import { GlobalContext } from "@/context/Global.context";
import style from "@/styles/cart/CartCheckout.module.scss";
import { useContext } from "react";

const CartCheckout = () => {
  const { cart } = useContext(GlobalContext);
  const calc = (discount?: number) => {
    let price = 0;
    cart.map((item) => {
      price += item.count * item.price;
    });
    return discount ? price * (1 - discount) : price;
  };
  return (
    <div>
      <div className={style.checkout__block}>
        <span className={style.checkout__title}>Subtotal</span>
        <span className={style.checkout__price}>${calc().toFixed(2)}</span>
      </div>
      <div className={style.checkout__block}>
        <span className={style.checkout__title}>Shipping</span>
        <span className={style.checkout__price}>calculated next step</span>
      </div>
      <div className={style.checkout__block}>
        <span className={style.checkout__title}>Discounts</span>
        <span className={style.checkout__price}>
          -{(calc() - calc(0.05)).toFixed(2)}
        </span>
      </div>
      <div className={style.checkout__block} style={{marginTop:'36px'}}>
        <span className={style.checkout__total}>TOTAL</span>
        <div>
          <span className={style.checkout__currency}>AUD</span>
          <span className={style.checkout__totalPrice}>
            ${calc(0.05).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
