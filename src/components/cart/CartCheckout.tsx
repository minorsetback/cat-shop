import { GlobalContext } from "@/context/Global.context";
import style from "@/styles/cart/CartCheckout.module.scss";
import { useRouter } from "next/router";
import { useContext } from "react";

const CartCheckout = () => {
  const { cart, promo, form } = useContext(GlobalContext);
  const router = useRouter();
  const calc = (discount?: number) => {
    let price = form.delivery;
    cart.map((item) => {
      price += item.count * item.price;
    });
    return discount ? price * (1 - discount) : price;
  };

  const subtotal = calc().toFixed(2);

  const discount = promo.includes("GETDISCOUNT")
    ? -(calc() - calc(0.05)).toFixed(2)
    : "$" + (0).toFixed(2);

  const shipping =
    router.pathname === "/"
      ? "calculated next step"
      : "$" + form.delivery.toFixed(2);
      
  const total = promo.includes("GETDISCOUNT")
    ? calc(0.05).toFixed(2)
    : calc().toFixed(2);

  return (
    <div>
      <div className={style.checkout__block}>
        <span className={style.checkout__title}>Subtotal</span>
        <span className={style.checkout__price}>${subtotal}</span>
      </div>
      <div className={style.checkout__block}>
        <span className={style.checkout__title}>Shipping</span>
        <span className={style.checkout__price}>{shipping}</span>
      </div>
      <div className={style.checkout__block}>
        <span className={style.checkout__title}>Discounts</span>
        <span className={style.checkout__price}>{discount}</span>
      </div>
      <div className={style.checkout__block} style={{ marginTop: "36px" }}>
        <span className={style.checkout__total}>TOTAL</span>
        <div>
          <span className={style.checkout__currency}>AUD</span>
          <span className={style.checkout__totalPrice}>{total}</span>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
