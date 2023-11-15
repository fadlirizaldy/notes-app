import React, { useState } from "react";
import { showFormattedDate } from "../utils";
import { Icon } from "@iconify/react";
import CardButton from "./CardButton";
// import ModalDetail from "./ModalDetail";

const Card = ({ data, setData, setShowModalDetail }) => {
  const [showOption, setShowOption] = useState(false);
  // const [showModalDetail, setShowModalDetail] = useState(false);
  const { id, title, body, createdAt, archived } = data;

  const deleteNote = () => {
    setData((prev) => {
      return prev.filter((data) => data.id !== id);
    });
  };

  const moveData = () => {
    setData((prev) => {
      const newState = prev.map((obj) => {
        if (obj.id === id) {
          return { ...obj, archived: !archived };
        }

        return obj;
      });

      return newState;
    });
  };

  return (
    <div className="card">
      {showOption && <CardButton key={id} archived={archived} moveData={moveData} deleteNote={deleteNote} />}

      <Icon icon="bi:three-dots-vertical" color="gray" width="18" className="optionDot" onClick={() => setShowOption((prev) => !prev)} />
      <h1 style={{ cursor: "pointer" }} onClick={() => setShowModalDetail((prev) => ({ data, isShow: true }))}>
        {title}
      </h1>
      <p className="date">{showFormattedDate(createdAt)}</p>
      <p className="description">{body}</p>
    </div>
  );
};

export default Card;
