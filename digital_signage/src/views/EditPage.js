import React, { useState, useEffect } from "react";

import HeaderBar from "../components/common/HeaderBar";
import ItemList from "../components/ItemList";
import CreateItem from "../components/CreateItem";
import DeleteItem from "../components/DeleteItem";
import * as API from "../api/index.js";

const EditPage = ({ items, setItems, handleShow }) => {
  const [IsClickItem, setIsClickItem] = useState(false);
  const [isClickCreate, setIsClickCreate] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleClickItem = (isShowItem, item) => {
    API.speak(item.description, function () {
      console.log("Success speak");
    }, function () {
      console.log("Fail speak");
    });
    setIsClickItem(isShowItem);
    isShowItem && setSelectedItem(item);
  };

  const handleClickCreate = (isCreate) => {
    setIsClickCreate(isCreate);
  };

  const handleDeleteItem = (id) => {
    API.del(id, function () {
      console.log("Success del");
    }, function () {
      console.log("Fail del");
    });
    const filterItems = items.filter((item) => item._id !== id);
    setItems(filterItems);
  };

  const handleCreateItem = (item) => {
    API.put({
      "_kind": "com.app.digital-signage:1",
      "title": `${item.title}`,
      "imageURL": `${item.image}`,
      "description": `${item.description}`
    }, function () {
      console.log("Success put");
    }, function () {
      console.log("Fail put");
    });
    setItems([...items, item]);
  };

  useEffect(() => {}, [items]);

  return !IsClickItem ? (
    !isClickCreate ? (
      <div>
        <HeaderBar
          handleClickCreate={handleClickCreate}
          handleShow={handleShow}
        />
        <ItemList handleClickItem={handleClickItem} items={items} />
      </div>
    ) : (
      <CreateItem
        handleClickCreate={handleClickCreate}
        handleCreateItem={handleCreateItem}
      />
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
