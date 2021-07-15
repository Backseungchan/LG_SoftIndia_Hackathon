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

  const CreateInput = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
  `;

  return (
    <Alert open={true} title="Create new signage content">
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CreateInput style={{ marginTop: "50px" }}>
          <BodyText style={{ margin: "0px" }}>TITLE</BodyText>
          <Input
            placeholder={`Please${" "}enter${" "}a${" "}title`}
            onChange={(input) => {
              setItem.title = input.value;
            }}
          />
        </CreateInput>
        <CreateInput>
          <BodyText style={{ margin: "0px" }}>IMAGE URL</BodyText>
          <Input
            placeholder={`Please${" "}enter${" "}a${" "}image url`}
            onChange={(input) => {
              setItem.image = input.value;
            }}
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
      </form>
      {isShowDialog && (
        <DialogUp
          title={createItem.title}
          image={createItem.image}
          description={`Are${" "}you${" "}sure${" "}you${" "}want${" "}to${" "}add${" "}this${" "}content?`}
          action={handleSubmit}
          setIsSHowDialog={setIsSHowDialog}
        />
      )}
    </Alert>
  );
};

export default CreateItem;
