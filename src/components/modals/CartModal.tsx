import React, { useContext } from "react";
import Modal from "react-modal";
import style from "@/styles/cart/CartModal.module.scss";
import CartContent from "@/components/cart/CartContent";
import CartCheckout from "@/components/cart/CartCheckout";
import CartAdvertising from "@/components/cart/CartAdvertising";
import Button from "@/components/@UI/Button";
import Link from "next/link";
import { GlobalContext } from "@/context/Global.context";

const customStyles = {
  content: {
    borderRadius: "0",
    width: "375px",
    right: "0 !important",
    inset: "auto 0 auto auto",
    padding: "12px",
    height: "96%",
  },
};

Modal.setAppElement("#__next");

const CartModal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(true);
  const { cart } = useContext(GlobalContext);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={true}
        overlayClassName="modal"
      >
        <div className={style.modal__content}>
          <div className={style.modal__header}>
            <div className={style.modal__title}>Your Cart</div>
            <div className={style.modal__cross} onClick={closeModal}>
              &#9587;
            </div>
          </div>
          {cart.length > 0 && (
            <>
              <div className={style.modal__cart}>
                <CartContent />
                <CartAdvertising />
              </div>
              <div className={style.modal__footer}>
                <CartCheckout />
                <Link href="/order">
                  <Button variant="black" text="Checkout now" />
                </Link>
              </div>
            </>
          )}
          {cart.length === 0 && (
            <p className={style.modal__cartEmpty}>
              There’s nothing for your poor cat in your cart!
            </p>
          )}
        </div>
      </Modal>
    </>
  );
};

export default CartModal;
