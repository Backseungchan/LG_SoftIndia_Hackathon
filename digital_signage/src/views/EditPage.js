import React, { useState, useEffect } from "react";

import HeaderBar from "../components/common/HeaderBar";
import ItemList from "../components/ItemList";
import DeleteItem from "../components/DeleteItem";

import * as API from "../api/index.js";

const EditPage = ({ items, setItems, handleShow, fetchData }) => {
  const [IsClickItem, setIsClickItem] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleClickItem = (isShowItem, item) => {
    setIsClickItem(isShowItem);
    isShowItem && setSelectedItem(item);
  };

  const handleDeleteItem = async (id) => {
    await API.deleteData(id);
    const filterItems = items.filter((item) => item._id !== id);
    setItems(filterItems);
  };

  useEffect(() => {}, [items]);

  return !IsClickItem ? (
      <div>
        <HeaderBar
          handleShow={handleShow}
          fetchData={fetchData}
        />
        <ItemList handleClickItem={handleClickItem} items={items} />
      </div>
    ) : (
      <DeleteItem
        item={selectedItem}
        handleClickItem={handleClickItem}
        handleDeleteItem={handleDeleteItem}
      />
  );
};

export default EditPage;
