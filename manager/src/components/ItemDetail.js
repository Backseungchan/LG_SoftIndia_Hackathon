import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

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

const ItemDetail = ({ item }) => {
  const classes = useStyles();
  return (
    <div className={classes.detailLayout}>
      <img
        src={item.imgBase64}
        alt={item.title + " img"}
        style={{ width: "50%", border: "1px solid" }}
      />
      <div className={classes.detailPaperRoot}>
        <Paper elevation={3} className={classes.detailPaper}>
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
