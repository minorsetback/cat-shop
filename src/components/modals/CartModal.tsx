import React from "react";
import Modal from "react-modal";
import style from "@/styles/cart/CartModal.module.scss";
import CartContent from "@/components/cart/CartContent";
import CartCheckout from "@/components/cart/CartCheckout";
import CartAdvertising from "@/components/cart/CartAdvertising";
import Button from "@/components/@UI/Button";
import Link from "next/link";

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
        </div>
      </Modal>
    </>
  );
};

export default CartModal;
