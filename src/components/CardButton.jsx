import { Icon } from "@iconify/react";
import React from "react";

const CardButton = ({ archived, deleteNote, moveData }) => {
  return (
    <div className="cardBtn">
      <div className="buttonAction">
        <Icon icon="iconamoon:edit-duotone" color="gray" />
        <button onClick={() => moveData()}>
          {archived ? "Show" : "Archive"}
        </button>
      </div>
      <div className="buttonAction">
        <Icon icon="octicon:trash-16" color="gray" />
        <button onClick={() => deleteNote()}>Delete</button>
      </div>
    </div>
  );
};

export default CardButton;
