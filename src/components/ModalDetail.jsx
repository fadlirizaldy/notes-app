import React from "react";
import styles from "./Modal.module.css";
import { showFormattedDate } from "../utils";

const ModalDetail = ({ data, setShowModalDetail }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        {/* {children} */}
        <h2>{data.title}</h2>
        <p className={styles.date}>{showFormattedDate(data.createdAt)}</p>
        <p>{data.body}</p>

        <div className={styles.modalBtn}>
          <button onClick={() => setShowModalDetail((prev) => ({ ...prev, isShow: false }))}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ModalDetail;
