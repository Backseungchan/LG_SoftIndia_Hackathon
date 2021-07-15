import React, { useState } from "react";
import Popup from "@enact/moonstone/Popup";
import Button from "@enact/sandstone/Button";

const PopUp = ({ content }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Popup open={isOpen} style={{ color: "black" }}>
      {content}
      <Button
        icon="closex"
        onClick={handleClose}
        style={{ backgroundColor: "indianred" }}
      ></Button>
    </Popup>
  );
};

export default PopUp;
