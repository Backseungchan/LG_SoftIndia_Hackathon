import React, { useState } from "react";
import styled from "styled-components";
import Alert from "@enact/sandstone/Alert";
import Input from "@enact/moonstone/Input";
import Button from "@enact/sandstone/Button";
import BodyText from "@enact/sandstone/BodyText";

import DialogUp from "./common/DialogUp";

const CreateItem = ({ handleClickCreate, handleCreateItem }) => {
  let setItem = { title: "", image: "" };
  const [createItem, setCreateItem] = useState({});
  const [isShowDialog, setIsSHowDialog] = useState(false);

  const handleSubmit = () => {
    handleClickCreate(false);
    handleCreateItem(createItem);
  };

  const handleValidation = () => {
    setCreateItem(setItem);
    setIsSHowDialog(true);
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
    <Alert open={true} title="Create new signage content">
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
        <div>
          <Button onClick={handleValidation}>Create</Button>
          <Button
            icon="closex"
            onClick={() => handleClickCreate(false)}
            style={{ backgroundColor: "indianred" }}
          ></Button>
        </div>
      </CreateForm>
      {isShowDialog && (
        <DialogUp
          title={createItem.title}
          image={createItem.image}
          description="Are you sure you want to add this content?"
          action={handleSubmit}
          setIsSHowDialog={setIsSHowDialog}
        />
      )}
    </Alert>
  );
};

export default CreateItem;
