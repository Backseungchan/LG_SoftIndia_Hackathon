import React from "react";
import Button from "@enact/moonstone/Button";

const CreateButton = ({ btnName, closeIcon, btnAction, closeAction }) => {
  return (
    <div>
      <Button onClick={btnAction}>{btnName}</Button>
      <Button
        icon={closeIcon}
        onClick={closeAction}
        style={{ backgroundColor: "indianred", color: "white" }}
       />
    </div>
  );
};

export default CreateButton;
