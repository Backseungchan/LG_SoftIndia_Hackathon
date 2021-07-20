import React from "react";
import GridListImageItem from '@enact/moonstone/GridListImageItem';

const ItemCard = ({ item, handleClickItem }) => {
  return (
    <GridListImageItem 
      source={item.imgBase64}
      caption={item.title}
      onClick={() => handleClickItem(true, item)}
      style={{ width: "100%", height: "500px" }}
    />
  );
};

export default ItemCard;
