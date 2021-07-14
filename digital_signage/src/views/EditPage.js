import React, { useState } from "react";

import HeaderBar from "../components/common/HeaderBar";
import ItemList from "../components/ItemList";
import CreateItem from "../components/CreateItem";
import DeleteItem from "../components/DeleteItem";

const EditPage = () => {
  const [items, setItems] = useState([])
  const [IsClickItem, setIsClickItem] = useState(false);
  const [isClickCreate, setIsClickCreate] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleClickItem = (isShowItem, item) => {
    setIsClickItem(isShowItem);
    isShowItem && setSelectedItem(item);
  };

  const handleClickCreate = (isCreate) => {
    setIsClickCreate(isCreate);
  }

  const handleCreateItem = (item) => {
    setItems([...items, item])
  };

  const handleDeleteItem = () => { };

  return !IsClickItem ? (
    !isClickCreate ? (
      <div>
        <HeaderBar handleClickCreate={handleClickCreate} />
        <ItemList handleClickItem={handleClickItem} />
      </div>
    ) : (
      <CreateItem handleClickCreate={handleClickCreate} handleCreateItem={handleCreateItem} />
    )
  ) : (
    <DeleteItem
      item={selectedItem}
      handleClickItem={handleClickItem}
      handleDeleteItem={handleDeleteItem}
    />
  );
};

export default EditPage;
