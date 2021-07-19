import React, { useState } from "react";
import styled from "styled-components";
import Button from "@enact/sandstone/Button";

import CreateButton from "./common/CreateButton";
import DialogUp from "./common/DialogUp";

const TextRecognition = ({
  createItem,
  setCreateItem,
  setIsNext,
  handleSubmit,
}) => {
  const [isShowDialog, setIsShowDialog] = useState(false);

  const UpdateText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const TextArea = styled.textarea`
    width: 800px;
    height: 300px;
    margin-bottom: 30px;
    font-size: 0.6em;
    padding: 10px;
  `;

  const handleSetDescription = () => {
    setCreateItem({
      ...createItem,
      description: document.getElementById("description").value,
    });
    setIsShowDialog(true);
  };

  return (
    <UpdateText>
      <TextArea id="description" />
      <CreateButton
        btnName="Create"
        closeIcon="arrowhookleft"
        btnAction={handleSetDescription}
        closeAction={() => setIsNext(false)}
      />
      {isShowDialog && (
        <DialogUp
          title={createItem.title}
          image={createItem.image}
          description="Would you like to add this content?"
          action={handleSubmit}
          closeDialog={() => setIsShowDialog(false)}
        />
      )}
    </UpdateText>
  );
};

export default TextRecognition;
