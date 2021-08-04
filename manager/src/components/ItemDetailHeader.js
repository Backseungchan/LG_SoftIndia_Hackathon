import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AlertDialog from "./common/AskDialog";

const useStyles = makeStyles({
  detailHeader: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
});

const ItemDetailHeader = ({ item, handleDelete }) => {
  const classes = useStyles();
  return (
    <div className={classes.detailHeader}>
      <AlertDialog
        btn={
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        }
        title="Do you want to delete?"
        content="Deleted data cannot be recovered."
        action={() => handleDelete(item._id)}
      />
    </div>
  );
};

export default ItemDetailHeader;
