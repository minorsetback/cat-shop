import { GlobalContext } from "@/context/Global.context";
import { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
import CartPromoCode from "./CartPromoCode";

const CartContent = () => {
  const { cart } = useContext(GlobalContext);

  return (
    <>
      {cart.map((item: any) => (
        <CartItem key={item.id} item={item} />
      ))}
      <CartPromoCode />
    </>
  );
};
export default CartContent;
