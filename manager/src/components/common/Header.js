import { makeStyles } from "@material-ui/core/styles";

import HeaderButton from "../HeaderButton";
import LG_logo from "../../assets/LG_logo.png";

const useStyles = makeStyles({
  headerRoot: {
    height: "15%",
    marginBottom: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 5px 7px -7px",
  },
  headerTeamInfo: {
    position: "absolute",
    left: "5%",
    display: "flex",
    alignItems: "center",
  },
});

const Header = ({ isList, action }) => {
  const classes = useStyles();
  return (
    <div className={classes.headerRoot}>
      <p className={classes.headerTeamInfo}>
        <img src={LG_logo} alt="LG_logo" width="100px" style={{marginRight: "10px"}}/>
        <div>
          <span style={{ color: "#db1d24" }}>KNU</span> Team4
          <div style={{ fontWeight: "bold" }}>WoongYaHo</div>
        </div>
      </p>
      <h1>
        <span style={{ color: "#3f51b5" }}>SDS</span> Manager
      </h1>
      <HeaderButton isList={isList} action={action} />
    </div>
  );
};

export default Header;
