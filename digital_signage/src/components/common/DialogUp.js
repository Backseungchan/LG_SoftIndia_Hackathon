import React from "react";
import Dialog from "@enact/moonstone/Dialog";
import ImageItem from "@enact/sandstone/ImageItem";

import CreateButton from "./CreateButton";

const DialogUp = ({ title, image, description, action, closeDialog }) => {
  return (
    <Dialog
      open
      title={description}
      buttons={
        <CreateButton
          btnName="Yes"
          closeIcon="closex"
          btnAction={action}
          closeAction={closeDialog}
        />
      }
      style={{ color: "black", textAlign: "center" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImageItem src={image} style={{ width: "500px", height: "500px" }}>
          <div style={{ color: "black", textAlign: "center" }}>{title}</div>
        </ImageItem>
      </div>
    </Dialog>
  );
};

export default DialogUp;
