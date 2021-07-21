import { makeStyles } from "@material-ui/core/styles";

import HeaderButton from "./HeaderButton";

const useStyles = makeStyles({
  headerRoot: {
    marginTop: "40px",
    marginBottom: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Header = ({ isItemList, setIsItemList }) => {
  const classes = useStyles();
  return (
    <div className={classes.headerRoot}>
      <h1>SDS Manager</h1>
      <HeaderButton isItemList={isItemList} setIsItemList={setIsItemList} />
    </div>
  );
};

export default Header;
