import { makeStyles } from "@material-ui/core/styles";

import ItemPaper from "../components/ItemPaper";

const useStyles = makeStyles({
  listLayout: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "50px",
  },
});

const ItemList = ({ items }) => {
  const classes = useStyles();
  return (
    <div className={classes.listLayout}>
      {items.map(
        (item, index) =>
          item.title !== "" && <ItemPaper key={index} item={item} />
      )}
    </div>
  );
};

export default ItemList;
