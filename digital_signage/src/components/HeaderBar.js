import React from "react";
import Button from "@enact/sandstone/Button";

const HeaderBar = (props) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "black" }}>Edit</h1>
        <Button
          style={{ backgroundColor: "gray" }}
          size="small"
          icon="arrowhookleft"
          onClick={props.func}
        ></Button>
      </div>
    </div>
  );
};

export default HeaderBar;
