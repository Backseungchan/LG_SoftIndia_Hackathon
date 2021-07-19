import React from "react";
import MainHeaderBar from "../components/common/MainHeaderBar";
import Carousel from "../components/Carousel";

const ShowPage = ({ items, handleShow }) => {
  return (
    <div>
      <MainHeaderBar handleShow={handleShow} />
      <Carousel items={items} />
    </div>
  );
};

export default ShowPage;
