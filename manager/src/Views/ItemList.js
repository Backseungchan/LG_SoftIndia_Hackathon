import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../components/common/Header";
import ItemPaper from "../components/ItemPaper";
import ItemDetail from "../components/ItemDetail";

import * as API from "../api/index.js";

const useStyles = makeStyles({
  listLayout: {
    height: "fit-content",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "50px",
  },
});

const ItemList = ({ items, setItems, setPending, handleItemList }) => {
  const classes = useStyles();
  const [itemDetail, setItemDetail] = useState({});
  const [isItemDetail, setIsItemDetail] = useState(false);

  const handleItemDetail = (item) => {
    item && setItemDetail(item);
    setIsItemDetail(!isItemDetail);
  };

  const handleDelete = async (id) => {
    setPending(true);
    await API.deleteData(id);
    setItems(items.filter((item) => item._id !== id));
    setPending(false);
    handleItemDetail();
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
      <ItemDetail
        item={itemDetail}
        items={items}
        setItems={setItems}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default ItemList;
