import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../components/Header";
import ItemPaper from "../components/ItemPaper";
import ItemDetail from "../components/ItemDetail";

import * as API from "../api/index.js";

const useStyles = makeStyles({
  listLayout: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "50px",
  },
});

const ItemList = ({ items, setItems, handleItemList }) => {
  const classes = useStyles();
  const [itemDetail, setItemDetail] = useState({});
  const [isItemDetail, setIsItemDetail] = useState(false);

  const handleItemDetail = (item) => {
    setItemDetail(item);
    setIsItemDetail(!isItemDetail);
  };

  const handleDelete = async (id) => {
    await API.deleteData(id);
    setItems(items.filter((item) => item._id !== id));
    handleItemList();
  };

  return !isItemDetail ? (
    <>
      <Header isList={!isItemDetail} action={handleItemList} />
      <div className={classes.listLayout}>
        {items.map(
          (item, index) =>
            item.title !== "" && (
              <ItemPaper
                key={index}
                item={item}
                handleItemDetail={handleItemDetail}
              />
            )
        )}
      </div>
    </>
  ) : (
    <>
      <Header action={() => setIsItemDetail(false)} />
      <ItemDetail item={itemDetail} handleDelete={handleDelete} />
    </>
  );
};

export default ItemList;
