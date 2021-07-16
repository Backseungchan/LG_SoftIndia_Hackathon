import React, { useState } from "react";
import Button from "@enact/sandstone/Button";

const MainHeaderBar = ({ handleShow }) => {
  const [Showing, setShowing] = useState(false);
  const [Icon, setIcon] = useState("triangledown");
  const handleHeader = () => {
    if (Icon === "triangledown") {
      setShowing(true);
      setIcon("triangleup");
    } else {
      setShowing(false);
      setIcon("triangledown");
    }
  };

  return (
    <div>
      <Button
        icon={Icon}
        style={{
          position: "absolute",
          left: "10px",
          top: "10px;",
          zIndex: "1",
        }}
        onClick={() => handleHeader()}
      ></Button>
      {Showing ? (
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
          <h1>WoongYaho</h1>
          <Button
            onClick={() => handleShow(false)}
            icon="gear"
            style={{ marginRight: "100px", backgroundColor: "gray" }}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MainHeaderBar;
