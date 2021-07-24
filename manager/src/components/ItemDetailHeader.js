import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles({
  detailHeader: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
});

const ItemDetailHeader = ({ item, handleDelete, handleUpdate }) => {
  const classes = useStyles();
  return (
    <div className={classes.detailHeader}>
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<DeleteIcon />}
        onClick={() => handleDelete(item._id)}
      >
        Delete
      </Button>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<CreateIcon />}
        onClick={handleUpdate}
      >
        Update
      </Button>
    </div>
  );
};

export default ItemDetailHeader;
