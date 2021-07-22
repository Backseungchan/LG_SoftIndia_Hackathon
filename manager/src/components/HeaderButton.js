import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    position: "absolute",
    right: "20%",
  },
}));

const HeaderButton = ({ isList, action }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="primary" onClick={action}>
        {isList ? <AddCircleIcon /> : <HomeIcon />}
      </Button>
    </div>
  );
};

HeaderButton.defaultProps = {
  isList: false,
};

export default HeaderButton;
