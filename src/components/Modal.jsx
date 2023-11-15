import React, { useState } from "react";
import styles from "./Modal.module.css";

const Modal = ({ setData, setShowModal }) => {
  const [inputData, setInputData] = useState({
    id: new Date().toString(),
    title: "",
    body: "",
    createdAt: new Date().toString(),
    archived: false,
  });

  const onChangeChecked = () => {
    setInputData((prev) => ({
      ...prev,
      archived: !inputData.archived,
    }));
  };

  const onSaveNote = () => {
    setData((prev) => [...prev, inputData]);
    setShowModal(false);
  };

  console.log(inputData);
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={() => setShowModal(false)}>
          &times;
        </span>
        {/* {children} */}
        <h1 className={styles.titleModal}>Add new note</h1>

        <form action="" className={styles.form}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter your title"
            className={styles.inputForm}
            onChange={(e) =>
              setInputData((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          <label>Description</label>
          <textarea
            name="description"
            cols="20"
            rows="5"
            className={styles.inputTextArea}
            placeholder="Enter your description"
            onChange={(e) =>
              setInputData((prev) => ({ ...prev, body: e.target.value }))
            }
          ></textarea>
          <div className={styles.checkBox}>
            <input
              type="checkbox"
              checked={inputData.archived}
              onChange={() => onChangeChecked()}
            />
            <span onClick={() => onChangeChecked()}>Note archived</span>
          </div>
        </form>

        <div className={styles.modalBtn}>
          <button onClick={() => setShowModal(false)}>Cancel</button>
          <button onClick={() => onSaveNote()}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
