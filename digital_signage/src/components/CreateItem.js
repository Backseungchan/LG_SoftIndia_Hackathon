import React, { useState } from "react";
import styled from "styled-components";
import Alert from "@enact/sandstone/Alert";
import Input from "@enact/moonstone/Input";

import CreateButton from "./common/CreateButton";
import TextRecognition from "./TextRecognition";
import * as API from "../api/index.js";

const CreateItem = ({ handleClickCreate, handleCreateItem }) => {
  let setItem = { title: "", image: "", description: "" };
  const [alertTitle, setAlertTitle] = useState("Create new signage content");
  const [createItem, setCreateItem] = useState({});
  const [isNext, setIsNext] = useState(false);

  const handleSubmit = () => {
    handleClickCreate(false);
    handleCreateItem(createItem);
    API.put({
      "_kind": "com.app.digital-signage:1",
      "title": `${createItem.title}`,
      "imageURL": `${createItem.image}`,
      "description": `${createItem.description}`
    }, function () {
      console.log("Success put");
    }, function () {
      console.log("Fail put");
    });
  };

  // 제목 및 이미지 링크 유효성 검사
  const handleValidation = () => {
    setCreateItem(setItem);
    setAlertTitle("Check recognized text");
    setIsNext(true);
  };

  const CreateForm = styled.form`
    width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const CreateInput = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
  `;

  return (
    <Alert open={true} title={alertTitle}>
      {!isNext ? (
        <CreateForm>
          <CreateInput style={{ marginTop: "50px" }}>
            TITLE
            <Input
              placeholder="Please enter a title"
              onChange={(input) => {
                setItem.title = input.value;
              }}
              style={{ width: "82%" }}
            />
          </CreateInput>
          <CreateInput>
            IMAGE URL
            <Input
              placeholder="Please enter a image url"
              onChange={(input) => {
                setItem.image = input.value;
              }}
              style={{ width: "82%" }}
            />
          </CreateInput>
          <CreateButton
            btnName="Next"
            closeIcon="closex"
            btnAction={handleValidation}
            closeAction={() => handleClickCreate(false)}
          />
        </CreateForm>
      ) : (
        <TextRecognition
          createItem={createItem}
          setCreateItem={setCreateItem}
          setIsNext={setIsNext}
          handleSubmit={handleSubmit}
        />
      )}
    </Alert>
  );
};

export default CreateItem;
