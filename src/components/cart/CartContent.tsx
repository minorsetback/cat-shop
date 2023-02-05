import { GlobalContext } from "@/context/Global.context";
import { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
import CartPromoCode from "./CartPromoCode";

const CartContent = () => {
  const { cart } = useContext(GlobalContext);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    setData(cart);
    console.log(cart)
  }, [cart]);

  return (
    <>
      {data.map((item: any) => (
        <CartItem key={item.id} item={item} />
      ))}
      <CartPromoCode />
    </>
  );
};
export default CartContent;
