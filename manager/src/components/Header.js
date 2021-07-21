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

const Header = ({ isList, action }) => {
  const classes = useStyles();
  return (
    <div className={classes.headerRoot}>
      <h1>SDS Manager</h1>
      <HeaderButton isList={isList} action={action} />
    </div>
  );
};

export default Header;
