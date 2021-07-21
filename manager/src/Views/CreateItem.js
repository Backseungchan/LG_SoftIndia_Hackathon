import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Paper } from "@material-ui/core";

import CreateText from "../components/CreateText";
import CreateImage from "../components/CreateImage";

import * as API from "../api/index.js";

const useStyles = makeStyles({
  createLayout: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  createForm: {
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "10px",
    height: "500px",
  },
});

const init = {
  title: "",
  imgBase64: "",
  description: "",
};

const CreateItem = ({ setIsItemList }) => {
  const classes = useStyles();
  const [input, setInput] = useState(init);
  const [file, setFile] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    API.createData(input);
    setInput(init);
    setIsItemList(true);
  }

  function handleFileChange(e) {
    const reader = new FileReader();
    reader.onloadend = () => {
      // 읽기 완료 후 아래 코드 실행
      const base64 = reader.result;
      if (base64) {
        setInput({ ...input, imgBase64: base64.toString() }); // 파일 base64 상태 업데이트
        console.log(input);
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]); // 파일을 읽어 버퍼에 저장
      setFile(e.target.files[0]); // 파일 상태 업데이트
    }
  }

  return (
    <div className={classes.createLayout}>
      <div className={classes.createLayout} style={{ flexDirection: "column" }}>
        <Paper elevation={3} style={{ width: "60%" }}>
          <form
            className={`${classes.createLayout} ${classes.createForm}`}
            autoComplete="off"
            noValidate
            onSubmit={handleSubmit}
          >
            <CreateText input={input} setInput={setInput} />
            <CreateImage input={input} handleFileChange={handleFileChange} />
            <Button type="submit" variant="contained" color="primary">
              Create
            </Button>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default CreateItem;
