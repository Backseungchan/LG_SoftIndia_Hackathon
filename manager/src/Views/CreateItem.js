import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Paper } from "@material-ui/core";

import Header from "../components/Header";
import CreateText from "../components/CreateText";
import CreateImage from "../components/CreateImage";

import * as API from "../api/index.js";

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

const init = {
  title: "",
  imgBase64: "",
  description: "",
};

const CreateItem = ({ handleItemList, setPending, items, setItems }) => {
  const classes = useStyles();
  const [input, setInput] = useState(init);

  async function handleSubmit(e) {
    e.preventDefault();
    setPending(true);
    await API.createData(input);
    setItems([...items, input]);
    setPending(false);
    setInput(init);
    handleItemList();
  }

  return (
    <>
      <Header action={handleItemList} />
      <div className={classes.createLayout}>
        <div
          className={classes.createLayout}
          style={{ flexDirection: "column" }}
        >
          <Paper elevation={3} style={{ width: "60%" }}>
            <form
              className={`${classes.createLayout} ${classes.createForm}`}
              autoComplete="off"
              noValidate
              onSubmit={handleSubmit}
            >
              <CreateImage input={input} setInput={setInput} />
              <CreateText input={input} setInput={setInput} />
              <Button type="submit" variant="contained" color="primary">
                Create
              </Button>
            </form>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default CreateItem;
