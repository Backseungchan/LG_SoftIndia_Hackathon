import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

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
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "5px solid rgb(0 0 0 / 10%)",
    "&:hover": {
      border: "5px solid #3f51b5",
    },
  },
  paperTitle: {
    position: "absolute",
    display: "flex",
    width: "100%",
    height: "50px",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px",
    bottom: "0",
    color: "white",
    backgroundColor: "rgb(0 0 0 / 30%)",
  },
}));

const ItemPaper = ({ item, handleItemDetail }) => {
  const classes = useStyles();

  return (
    <div className={classes.itemRoot} onClick={() => handleItemDetail(item)}>
      <Paper elevation={7} className={classes.paper}>
        <img src={item.imgBase64} alt={item.title} width="100%" />
        <Typography variant="h5" className={classes.paperTitle}>
          {item.title}
        </Typography>
      </Paper>
    </div>
  );
};

export default ItemPaper;
