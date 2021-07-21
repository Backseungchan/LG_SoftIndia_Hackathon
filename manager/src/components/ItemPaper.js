import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paperRoot: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "2px solid",
    "&:hover": {
      border: "2px solid #3f51b5",
      "& h3": {
        borderTopColor: "#3f51b5",
      },
    },
  },
  paperTitle: {
    display: "flex",
    width: "100%",
    height: "30px",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px",
    borderTop: "2px solid",
  },
}));

const ItemPaper = ({ item, handleItemDetail }) => {
  const classes = useStyles();

  return (
    <div className={classes.itemRoot} onClick={() => handleItemDetail(item)}>
      <Paper elevation={3} className={classes.paper}>
        <img src={item.imgBase64} alt={item.title} width="100%" />
        <h3 className={classes.paperTitle}>{item.title}</h3>
      </Paper>
    </div>
  );
};

export default ItemPaper;
