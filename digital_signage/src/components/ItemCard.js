import React from "react";
import ImageItem from "@enact/sandstone/ImageItem";

const ItemCard = ({ item, handleClickItem }) => {
  return (
    <ImageItem
      src={item.image}
      style={{ width: "100%", height: "500px" }}
      onClick={() => handleClickItem(true, item)}
    >
      <div style={{ color: "black" }}>{item.title}</div>
    </ImageItem>
  );
};

export default ItemCard;
