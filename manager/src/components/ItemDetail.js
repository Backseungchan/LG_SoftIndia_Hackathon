import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import ItemDetailHeader from "./ItemDetailHeader";
import ShowImage from "./common/ShowImage";
import UpdateItem from "./UpdateItem";

const useStyles = makeStyles((theme) => ({
  detailLayout: {
    display: "flex",
    justifyContent: "space-around",
  },
  detailPaperRoot: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  detailPaper: {
    width: "450px",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    marginTop: "0px",
  },
}));

const ItemDetail = ({ item, items, setItems, handleDelete }) => {
  const classes = useStyles();
  const [isUpdate, setIsUpdate] = useState(false);

  const handleUpdate = () => setIsUpdate(!isUpdate);

  return (
    <div className={classes.detailLayout}>
      <ShowImage item={item} width="50%" />
      <div className={classes.detailPaperRoot}>
        <Paper elevation={3} className={classes.detailPaper}>
          <ItemDetailHeader
            item={item}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
          {!isUpdate ? (
            <>
              <h2 style={{ marginTop: "0px" }}>TITLE</h2>
              {item.title}
              <hr style={{ width: "80%", marginTop: "20px" }} />
              <h2>DESCRIPTION</h2>
              <pre style={{ fontFamily: "auto" }}>{item.description}</pre>
            </>
          ) : (
            <UpdateItem
              item={item}
              items={items}
              setItems={setItems}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          )}
        </Paper>
      </div>
    </div>
  );
};

export default ItemDetail;
