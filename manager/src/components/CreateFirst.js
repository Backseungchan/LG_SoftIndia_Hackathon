import { Button } from "@material-ui/core";

import CreateTitle from "../components/CreateTitle";
import CreateImage from "../components/CreateImage";

const CreateFirst = ({
  input,
  setInput,
  handelSetInput,
  handleIsDescription,
}) => {
  return (
    <>
      <CreateImage input={input} setInput={setInput} />
      <CreateTitle
        input={input}
        setInput={setInput}
        handelSetInput={handelSetInput}
      />
      <Button variant="contained" color="primary" onClick={handleIsDescription}>
        Create Description
      </Button>
    </>
  );
};

export default CreateFirst;
