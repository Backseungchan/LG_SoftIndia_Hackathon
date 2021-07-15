import React from "react";
import Button from "@enact/sandstone/Button";

const MainHeaderBar = ({ handleShow }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Button
        style={{
          marginLeft: "100px",
          visibility: "hidden",
        }}
      ></Button>
      <h1 style={{ color: "black" }}>WoongYaho</h1>
      <Button
        onClick={() => handleShow(false)}
        icon="gear"
        style={{ backgroundColor: "black", marginRight: "100px" }}
      />
    </div>
  );
};

export default MainHeaderBar;
