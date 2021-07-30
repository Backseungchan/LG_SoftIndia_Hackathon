import { useState, useEffect } from "react";

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

const init = {
  title: "",
  imgBase64: "",
  description: "",
};

const CreateSecond = ({ input, setInput, handleIsSecond, handelSetInput }) => {
  const classes = useStyles();
  const [isDisableBtn, setIsDisableBtn] = useState(true);

  useEffect(() => {
    if (input.description !== "") setIsDisableBtn(false);
    else setIsDisableBtn(true);
  }, [input]);

  const handleBack = () => {
    setInput(init);
    handleIsSecond();
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <Button
          variant="outlined"
          color="primary"
          style={{ left: "5%" }}
          onClick={handleBack}
        >
          <ArrowBackIcon />
        </Button>
      </div>
      <TextField
        multiline
        rows={15}
        name="description"
        className={classes.inputDescription}
        variant="outlined"
        label="description"
        value={input.description}
        onChange={handelSetInput}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isDisableBtn}
      >
        Complete
      </Button>
    </>
  );
};

export default CreateSecond;
