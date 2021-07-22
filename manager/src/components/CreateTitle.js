import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  inputTitle: {
    width: "90%",
    marginBottom: "30px",
  },
});

const CreateTitle = ({ input, handelSetInput }) => {
  const classes = useStyles();

  return (
    <TextField
      name="title"
      className={classes.inputTitle}
      variant="outlined"
      label="title"
      value={input.title}
      onChange={handelSetInput}
    />
  );
};

export default CreateTitle;
