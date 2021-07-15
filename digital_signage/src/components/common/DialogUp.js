import React, { useState } from "react";
import Dialog from "@enact/moonstone/Dialog";
import Button from "@enact/sandstone/Button";
import ImageItem from "@enact/sandstone/ImageItem";

const DialogUp = ({ title, image, description, action, setIsSHowDialog }) => {
  return (
    <Dialog
      open
      title={description}
      buttons={
        <div>
          <Button onClick={action}>Yes</Button>
          <Button
            icon="closex"
            onClick={() => setIsSHowDialog(false)}
            style={{ backgroundColor: "indianred" }}
          ></Button>
        </div>
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
