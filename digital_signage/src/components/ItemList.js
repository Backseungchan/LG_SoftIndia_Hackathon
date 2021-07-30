import React from "react";

import ItemCard from "../components/ItemCard";
import Scroller from "@enact/sandstone/Scroller";

const ItemList = ({ handleClickItem, items }) => {
  return (
    <Scroller>
      <div
        style={{
          height: "fit-content",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "50px",
        }}
      >
        {items.map((item, index) => (
          <div>
            <ItemCard
              key={index}
              item={item}
              handleClickItem={handleClickItem}
            />
          </div>
        ))}
      </div>
    </Scroller>
  );
};

export default ItemList;
