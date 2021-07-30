import { makeStyles } from "@material-ui/core/styles";

import CreateFirst from "../components/CreateFirst";
import CreateSecond from "../components/CreateSecond";

const useStyles = makeStyles({
  createLayout: {
    display: "flex",
    alignItems: "center",
  },
  createForm: (isDescription) => ({
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "10px",
    height: `${isDescription ? "500px" : "300px"}`,
  }),
});

const CreateForm = ({
  input,
  setInput,
  isSecond,
  disableBtn,
  handleSubmit,
  handelSetInput,
  handleIsDescription,
}) => {
  const classes = useStyles(isSecond);
  return (
    <form
      className={`${classes.createLayout} ${classes.createForm}`}
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
    >
      {!isSecond ? (
        <CreateFirst
          input={input}
          disableBtn={disableBtn}
          setInput={setInput}
          handelSetInput={handelSetInput}
          handleIsDescription={handleIsDescription}
        />
      ) : (
        <CreateSecond
          input={input}
          setInput={setInput}
          handelSetInput={handelSetInput}
          handleIsDescription={handleIsDescription}
        />
      )}
    </form>
  );
};

export default CreateForm;
