import { GlobalContext } from "@/context/Global.context";
import { useContext } from "react";

const useProducts = () => {
  const { cart, setCart } = useContext(GlobalContext);

  const decrement = (id: number) => {
    const newCart = cart.map((item) => {
      if (item.id === id && item.count > 1) {
        return { ...item, count: (item.count -= 1) };
      }
      return item;
    });
    setCart(newCart);
  };

  const increment = (id: number) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, count: (item.count += 1) };
      }
      return item;
    });
    setCart(newCart);
  };

  return {
    decrement,
    increment,
  };
};

export default useProducts;
