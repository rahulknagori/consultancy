import React from "react";
import styles from "./modal.module.css";

type ModalProps = {
  open: Boolean;
  sx: Object;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

const Modal = ({ open, sx, children }: ModalProps): JSX.Element => {
  return (
    <div
      id="myModal"
      className={open ? `${styles.modal} ${styles.open}` : styles.modal}
    >
      <div style={sx} className={styles["modal-content"]}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
