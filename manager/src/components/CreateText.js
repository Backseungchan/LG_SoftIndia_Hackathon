import { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  createInput: {
    width: "90%",
    marginBottom: "30px",
  },
});

const CreateText = ({ input, setInput }) => {
  const classes = useStyles();

  const handelSetInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <Fragment>
      <TextField
        required
        name="title"
        className={classes.createInput}
        variant="outlined"
        label="title"
        value={input.title}
        onChange={handelSetInput}
      />
      <TextField
        required
        multiline
        rows={10}
        name="description"
        className={classes.createInput}
        variant="outlined"
        label="description"
        value={input.description}
        onChange={handelSetInput}
      />
    </Fragment>
  );
};

export default CreateText;
