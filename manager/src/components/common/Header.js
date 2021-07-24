import { makeStyles } from "@material-ui/core/styles";

import HeaderButton from "../HeaderButton";

const useStyles = makeStyles({
  headerRoot: {
    height: "15%",
    marginBottom: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 5px 7px -7px",
  },
});

const Header = ({ isList, action }) => {
  const classes = useStyles();
  return (
    <div className={classes.headerRoot}>
      <h1>
        <span style={{ color: "#3f51b5" }}>SDS</span> Manager
      </h1>
      <HeaderButton isList={isList} action={action} />
    </div>
  );
};

export default Header;
