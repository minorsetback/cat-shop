import style from "@/styles/order/PaymentCard.module.scss";
import Image from "next/image";

const PaymentCard = ({ img }: { img: any }) => {
  return (
    <div className={style.payment}>
      <Image src={img} height={45} width={142} alt="" />
    </div>
  );
};

export default PaymentCard;
