import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import Header from "../components/common/Header";
import CreateForm from "../components/CreateForm";

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
    const res = await API.createData(input);
    setItems([...items, res.data]);
    setPending(false);
    setInput(init);
    handleItemList();
  }

  const handleIsDescription = async () => {
    setPending(true);
    const bodyFormData = new FormData();
    bodyFormData.append('img_url', input.imgBase64)
    const res = await API.getImageOCR(bodyFormData);
    setInput({...input, description: res.data.content});
    setPending(false);
    setIsSecond(!isSecond);
  };

  const handelSetInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <>
      <Header action={handleItemList} />
      <div className={isSecond && classes.descriptionLayout}>
        {isSecond && (
          <img
            src={input.imgBase64}
            alt={input.title + " img"}
            style={{ width: "40%", border: "1px solid" }}
          />
        )}
        <div
          className={classes.createLayout}
          style={{ flexDirection: "column" }}
        >
          <Paper
            elevation={3}
            style={{ width: `${isSecond ? "800px" : "60%"}` }}
          >
            <CreateForm
              input={input}
              setInput={setInput}
              handleSubmit={handleSubmit}
              handelSetInput={handelSetInput}
              isSecond={isSecond}
              handleIsDescription={handleIsDescription}
            />
          </Paper>
        </div>
      </div>
    </>
  );
};

export default CreateItem;
