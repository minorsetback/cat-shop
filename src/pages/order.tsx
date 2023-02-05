import CartAdvertising from "@/components/cart/CartAdvertising";
import CartCheckout from "@/components/cart/CartCheckout";
import CartContent from "@/components/cart/CartContent";
import Button from "@/components/@UI/Button";
import style from "@/styles/order/OrderPage.module.scss";
import Header from "@/components/Header";
import Input from "@/components/@UI/Input";
import RadioButton from "@/components/@UI/RadioButton";
import PaymentCard from "@/components/order/PaymentCard";
import card from "@/assets/images/card.png";
import paypal from "@/assets/images/paypal.png";
import secure from "@/assets/images/secure.png";
import sha from "@/assets/images/sha.png";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "@/context/Global.context";
import ModalShipping from "@/components/modals/ModalShipping";

const OrderPage = () => {
  const ref = useRef<any>();
  const { setForm, form } = useContext(GlobalContext);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    ref.current.insertAdjacentHTML(
      "afterend",
      '<label for="tel" class="label">mobile phone</label>'
    );
    ref.current.id = "tel";
    ref.current.required = true;
  }, []);

  console.log(form);

  return (
    <div className={style.order}>
      <Header title="Checkout" />
      <div className={style.order__main}>
        <div className={style.order__delivery}>
          <h1 className={style.order__title}>Your Details</h1>
          <Input
            type="input"
            inputName="your email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            value={form.email}
          />
          <div className={style.order__phone}>
            <PhoneInput
              ref={ref}
              placeholder=""
              value={form.phone}
              onChange={(value) => setForm({ ...form, phone: value })}
              className={style.order__phoneInput}
            />
            <p className={style.order__phoneDescription}>
              Your phone number is required for delivery & shipping updates.
            </p>
          </div>
          <div className={style.order__userDetails}>
            <Input
              type="input"
              inputName="first name"
              onChange={(e) => setForm({ ...form, first_name: e.target.value })}
              value={form.first_name}
            />

            <Input
              type="input"
              inputName="last name"
              onChange={(e) => setForm({ ...form, last_name: e.target.value })}
              value={form.last_name}
            />
          </div>
          <h1 className={style.order__title}>Delivery Details</h1>
          <Input
            type="select"
            inputName="country"
            options={["Ukraine", "Australia"]}
            onChange={(e) => setForm({ ...form, country: e.target.value })}
            value={form.country}
          />
          <Input
            type="textarea"
            inputName="delivery addres"
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            value={form.address}
          />
          <div className={style.order__shipping}>
            <RadioButton
              title="Free Shipping"
              defaultChecked={true}
              price={0}
              onChange={(e) => {
                setForm({
                  ...form,
                  delivery: e.target.checked ? 0 : 0,
                });
              }}
            />
            <RadioButton
              title="Standard Shipping"
              price={10}
              onChange={(e) => {
                setForm({
                  ...form,
                  delivery: e.target.checked ? 10.00 : 0,
                });
              }}
            />
            <RadioButton
              title="Express Shipping"
              price={25.3}
              onChange={(e) => {
                setForm({
                  ...form,
                  delivery: e.target.checked ? 25.30 : 0,
                });
              }}
            />
            <button
              className={style.order__button}
              onClick={() => {
                setIsOpen(true);
              }}
            >
              about shipping
            </button>
            <ModalShipping modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
          </div>
          <h1 className={style.order__title}>Payment Details</h1>
          <div className={style.order__payment}>
            <PaymentCard img={paypal} />
            <PaymentCard img={card} />
          </div>
        </div>
        <div className={style.order__info}>
          <h1 className={style.order__title}>Your order</h1>
          <div className={style.order__cart}>
            <CartContent />
            <CartCheckout />
          </div>
          <Button variant="black" text="Pay now" />
          <CartAdvertising />
        </div>
      </div>
      <div className={style.order__footer}>
        <p className={style.order__footerTitle}>Secured & Encrypted Checkout</p>
        <Image
          src={secure}
          width={65}
          height={69}
          alt=""
          style={{ marginRight: 29 }}
        />
        <Image src={sha} width={98} height={74} alt="" />
      </div>
    </div>
  );
};

export default OrderPage;
