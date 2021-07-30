import React from "react";
import Button from "@enact/sandstone/Button";

const HeaderBar = ({ handleShow, fetchData }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: "30px",
        paddingTop: "30px",
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
      />
      <Button
        onClick={() => fetchData()}
        icon="refresh"
        style={{ marginRight: "100px", backgroundColor: "gray" }}
      />
    </div>
  );
};

export default HeaderBar;
