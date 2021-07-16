import React, { useState } from "react";
import InfiniteCarousel from "react-leaf-carousel";
import MainHeaderBar from "../components/common/MainHeaderBar";

const ShowPage = ({ items, handleShow }) => {
  return (
    <div>
      <MainHeaderBar handleShow={handleShow} />
      <InfiniteCarousel
        dots={true}
        autoCycle={true}
        showSides={false}
        sideSize={0.1}
        slidesToScroll={1}
        slidesToShow={1}
        scrollOnDevice={true}
      >
        {items.map((item) => (
          <div style={{ textAlign: "center" }}>
            <img
              src={item.image}
              style={{ width: "auto", height: "95vh" }}
            ></img>
          </div>
        ))}
      </InfiniteCarousel>
    </div>
  );
};

export default ShowPage;
