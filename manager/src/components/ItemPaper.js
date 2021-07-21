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
  },
}));

const ItemPaper = ({ item }) => {
  const classes = useStyles();

  return (
    <div className={classes.itemRoot}>
      <Paper elevation={3} className={classes.paper}>
        <img
          src={item.imgBase64}
          alt={item.title}
          width="100%"
          height="500px"
        />
        <h3>{item.title}</h3>
      </Paper>
    </div>
  );
};

export default ItemPaper;
