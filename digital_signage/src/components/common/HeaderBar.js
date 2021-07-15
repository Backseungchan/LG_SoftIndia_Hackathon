import React from "react";
import Button from "@enact/sandstone/Button";

const HeaderBar = ({ handleClickCreate, handleShow }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Button
        onClick={() => handleShow(true)}
        style={{
          backgroundColor: "indianred",
          marginLeft: "100px",
          display: "hidden",
        }}
        icon="arrowhookleft"
      ></Button>
      <h1>Edit</h1>
      <Button
        onClick={() => handleClickCreate(true)}
        icon="plus"
        style={{ marginRight: "100px", backgroundColor: "gray" }}
      />
    </div>
  );
};

export default HeaderBar;
