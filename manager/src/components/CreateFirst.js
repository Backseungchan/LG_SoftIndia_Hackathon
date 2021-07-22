import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

import CreateTitle from "../components/CreateTitle";
import CreateImage from "../components/CreateImage";

const CreateFirst = ({
  input,
  setInput,
  handelSetInput,
  handleIsDescription,
}) => {
  const [isDisableBtn, setIsDisableBtn] = useState(true);
  useEffect(() => {
    if (input.title !== "" && input.imgBase64 !== "") setIsDisableBtn(false);
    else setIsDisableBtn(true);
  }, [input]);

  return (
    <>
      <CreateImage input={input} setInput={setInput} />
      <CreateTitle input={input} handelSetInput={handelSetInput} />
      <Button
        variant="contained"
        color="primary"
        disabled={isDisableBtn}
        onClick={handleIsDescription}
      >
        Create Description
      </Button>
    </>
  );
};

export default CreateFirst;
