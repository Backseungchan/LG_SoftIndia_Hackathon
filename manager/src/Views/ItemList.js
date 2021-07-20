import { makeStyles } from "@material-ui/core/styles";

import ItemPaper from "../components/ItemPaper";

const useStyles = makeStyles({
  listLayout: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "50px",
  },
});

const ItemList = ({ input, setInput }) => {
  const classes = useStyles();
  return (
    <div className={classes.listLayout}>
      {input.map(
        (item, index) =>
          item.title !== "" && <ItemPaper key={index} item={item} />
      )}
    </div>
  );
};

export default ItemList;
