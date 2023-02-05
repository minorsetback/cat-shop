import style from "@/styles/cart/CartAdvertising.module.scss";
import Image from "next/image";
import img from "@/assets/images/cat-street-hero-olive_2000.webp";
import Button from "@/components/@UI/Button";

const CartAdvertising = () => {
  return (
    <>
      <div className={style.advertising}>
        <h1 className={style.advertising__title}>Only For Cool Cats...</h1>
        <div className={style.advertising__content}>
          <div className={style.advetising__image}>
            <Image src={img} width={162} height={114} alt="" />
          </div>
          <div className={style.adverising__contentText}>
            <p className={style.advertising__desc}>
              Add the “Catnip” cover to your order and save 5%
            </p>
            <span className={style.advertising__newPrice}>$122.55</span>
            <span className={style.advertising__oldPrice}>$129.00</span>
            <Button variant="white" text="Add Now" />
          </div>
        </div>
      </div>
    </>
  );
};
export default CartAdvertising;
