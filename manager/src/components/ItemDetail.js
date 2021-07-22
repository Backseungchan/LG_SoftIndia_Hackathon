import { makeStyles } from "@material-ui/core/styles";
import { Paper, Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import ShowImage from "./common/ShowImage";

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
  },
}));

const ItemDetail = ({ item, handleDelete }) => {
  const classes = useStyles();
  return (
    <div className={classes.detailLayout}>
      <ShowImage item={item} width="50%" />
      <div className={classes.detailPaperRoot}>
        <Paper elevation={3} className={classes.detailPaper}>
          <div style={{ width: "100%" }}>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={() => handleDelete(item._id)}
            >
              Delete
            </Button>
          </div>
          <h2 style={{ marginTop: "0px" }}>TITLE</h2>
          {item.title}
          <h2>DESCRIPTION</h2>
          {item.description}
        </Paper>
      </div>
    </div>
  );
};

export default ItemDetail;
