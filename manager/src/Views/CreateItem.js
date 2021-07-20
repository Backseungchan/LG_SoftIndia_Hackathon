import { makeStyles } from "@material-ui/core/styles";
import { Button, Paper } from "@material-ui/core";

import CreateText from "../components/CreateText";
import CreateImage from "../components/CreateImage";

const useStyles = makeStyles({
  createLayout: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  createForm: {
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "10px",
    height: "500px",
  },
});

const CreateItem = ({ input, setInput, handleSubmit, handleFileChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.createLayout}>
      <div className={classes.createLayout} style={{ flexDirection: "column" }}>
        <Paper elevation={3} style={{ width: "60%" }}>
          <form
            className={`${classes.createLayout} ${classes.createForm}`}
            autoComplete="off"
            noValidate
            onSubmit={handleSubmit}
          >
            <CreateText input={input} setInput={setInput} />
            <CreateImage input={input} handleFileChange={handleFileChange} />
            <Button type="submit" variant="contained" color="primary">
              Create
            </Button>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default CreateItem;
