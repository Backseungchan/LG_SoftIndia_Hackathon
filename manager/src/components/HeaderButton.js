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
    right: "290px",
  },
}));

const HeaderButton = ({ isItemList, setIsItemList, action }) => {
  const classes = useStyles();

  const handleClick = () => {
    setIsItemList(!isItemList);
  };

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="primary" onClick={handleClick}>
        {isItemList ? <AddCircleIcon /> : <HomeIcon />}
      </Button>
    </div>
  );
};

export default HeaderButton;
