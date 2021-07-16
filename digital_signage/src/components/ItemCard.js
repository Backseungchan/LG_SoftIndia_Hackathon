import React from "react";
import ImageItem from "@enact/sandstone/ImageItem";
import GridListImageItem from '@enact/moonstone/GridListImageItem';

const ItemCard = ({ item, handleClickItem }) => {
  return (
    // <ImageItem
    //   src={item.image}
    //   style={{ width: "100%", height: "500px" }}
    //   onClick={() => handleClickItem(true, item)}
    // >
    //   <div style={{ textAlign: "center" }}>{item.title}</div>
    // </ImageItem>
    <GridListImageItem 
      source={item.image}
      caption={item.title}
      onClick={() => handleClickItem(true, item)}
      style={{ width: "100%", height: "500px" }}
    />
  );
};

export default ItemCard;
