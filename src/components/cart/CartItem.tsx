import useProducts from "@/hooks/useProducts";
import styles from "@/styles/cart/CartItem.module.scss";
import Image from "next/image";

type CartType = {
  id: number;
  title: string;
  count: number;
  img: any;
  price: number;
};

const CartItem = ({ item }: { item: CartType }) => {
  const { decrement, increment } = useProducts();

  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <Image src={item.img} width={98} height={62} alt="" />
      </div>
      <div>
        <p className={styles.item__title}>{item.title}</p>
        <div className={styles.item__pricing}>
          <div className={styles.item__counter}>
            <div
              className={styles.item__decrement}
              onClick={() => {
                decrement(item.id);
              }}
            >
              -
            </div>
            <div className={styles.item__count}>{item.count}</div>
            <div
              className={styles.item__decrement}
              onClick={() => {
                increment(item.id);
              }}
            >
              +
            </div>
          </div>
          <p className={styles.item__price}>
            {(item.count * item.price)?.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
