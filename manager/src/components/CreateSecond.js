import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles({
  inputDescription: {
    width: "90%",
    marginBottom: "30px",
  },
});

const CreateSecond = ({ input, handelSetInput, handleIsDescription }) => {
  const classes = useStyles();

  return (
    <>
      <div style={{ width: "100%" }}>
        <Button
          variant="outlined"
          color="primary"
          style={{ left: "5%" }}
          onClick={handleIsDescription}
        >
          <ArrowBackIcon />
        </Button>
      </div>
      <TextField
        required
        multiline
        rows={15}
        name="description"
        className={classes.inputDescription}
        variant="outlined"
        label="description"
        value={input.description}
        onChange={handelSetInput}
      />
      <Button type="submit" variant="contained" color="primary">
        Complete
      </Button>
    </>
  );
};

export default CreateSecond;
