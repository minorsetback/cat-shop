import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    borderRadius: "10px",
    width: "355px",
    height: "200px",
    padding: "12px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#__next");

const ModalShipping = ({
  modalIsOpen,
  setIsOpen,
}: {
  modalIsOpen: boolean;
  setIsOpen: (item: boolean) => void;
}) => {
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={true}
        overlayClassName="modal"
      >
        <h1 style={{ textAlign: "center", marginTop: "80px" }}>Hi there</h1>
        <p>To get discount enter GETDISCOUNT</p>
      </Modal>
    </>
  );
};

export default ModalShipping;
