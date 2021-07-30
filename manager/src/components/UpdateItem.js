import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { TextField, Button } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import * as API from "../api/index.js";

const useStyles = makeStyles({
  updateInput: {
    width: "100%",
  },
  updateForm: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const UpdateItem = ({ item, items, setItems, handleUpdate, setPending }) => {
  const classes = useStyles();
  const [input, setInput] = useState(item);
  const handelChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    setPending(true);
    setPending(false);
    handleUpdate();
  };

  return (
    <form className={classes.updateForm} onSubmit={handleUpdateSubmit}>
      <h2 style={{ marginTop: "0px" }}>TITLE</h2>
      <TextField
        name="title"
        variant="outlined"
        value={input.title}
        onChange={handelChange}
        className={classes.updateInput}
      />
      <h2>DESCRIPTION</h2>
      <TextField
        multiline
        name="description"
        variant="outlined"
        value={input.description}
        onChange={handelChange}
        className={classes.updateInput}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginTop: "10px" }}
      >
        <CheckCircleOutlineIcon />
      </Button>
    </form>
  );
};

export default UpdateItem;
