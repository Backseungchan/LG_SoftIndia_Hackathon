import React from "react";
import Button from "@enact/sandstone/Button";

const HeaderBar = ({ handleClickCreate }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Button
        style={{ backgroundColor: "gray", marginLeft: "100px" }}
        icon="arrowhookleft"
      ></Button>
      <h1 style={{ color: "black" }}>Edit</h1>
      <Button onClick={() => handleClickCreate(true)} icon="plus" style={{ backgroundColor:"black", marginRight: "100px" }} />
    </div>
  );
};

export default HeaderBar;
