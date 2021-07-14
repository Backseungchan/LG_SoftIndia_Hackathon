import React from "react";
import ImageItem from "@enact/sandstone/ImageItem";
import CheckboxItem from "@enact/sandstone/CheckboxItem";

const ItemCard = ({ item, handleClickItem }) => {
  return (
    <ImageItem
      src={item.image}
      label={item.price}
      style={{ width: "100%", height: "500px" }}
      onClick={() => handleClickItem(item)}
    >
      <div style={{ color: "black" }}>{item.name}</div>
    </ImageItem>
  );
};

export default ItemCard;
