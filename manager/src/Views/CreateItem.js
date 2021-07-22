import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import Header from "../components/common/Header";
import CreateForm from "../components/CreateForm";
import ShowImage from "../components/common/ShowImage";

import * as API from "../api/index.js";

const useStyles = makeStyles({
  createLayout: {
    display: "flex",
    alignItems: "center",
  },
  descriptionLayout: {
    display: "flex",
    justifyContent: "space-around",
  },
  createForm: (isDescription) => ({
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "10px",
    height: `${isDescription ? "500px" : "300px"}`,
  }),
});

const init = {
  title: "",
  imgBase64: "",
  description: "",
};

const CreateItem = ({ handleItemList, setPending, items, setItems }) => {
  const [input, setInput] = useState(init);
  const [isSecond, setIsSecond] = useState(false);
  const classes = useStyles(isSecond);

  async function handleSubmit(e) {
    e.preventDefault();
    setPending(true);
    await API.createData(input);
    setItems([...items, input]);
    setPending(false);
    setInput(init);
    handleItemList();
  }

  const handleIsDescription = () => setIsSecond(!isSecond);

  const handelSetInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <>
      <Header action={handleItemList} />
      <div className={isSecond && classes.descriptionLayout}>
        {isSecond && <ShowImage item={input} width="40%" />}
        <div
          className={classes.createLayout}
          style={{ flexDirection: "column" }}
        >
          <Paper
            elevation={3}
            style={{
              width: `${isSecond ? "800px" : "60%"}`,
              marginTop: `${isSecond ? "0px" : "100px"}`,
            }}
          >
            <CreateForm
              input={input}
              isSecond={isSecond}
              setInput={setInput}
              handleSubmit={handleSubmit}
              handelSetInput={handelSetInput}
              handleIsDescription={handleIsDescription}
            />
          </Paper>
        </div>
      </div>
    </>
  );
};

export default CreateItem;
