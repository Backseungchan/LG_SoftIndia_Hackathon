import React, { useState } from "react";
import styled from "styled-components";
import CreateButton from "./common/CreateButton";
import DialogUp from "./common/DialogUp";

const TextRecognition = ({
  createItem,
  setCreateItem,
  setIsNext,
  handleSubmit,
}) => {
  const [isShowDialog, setIsSHowDialog] = useState(false);

  const UpdateText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const TextArea = styled.textarea`
    width: 500px;
    height: 300px;
    margin-bottom: 30px;
    font-size: 0.6em;
    padding: 10px;
  `;

  const handleChange = (e) => {
    setCreateItem({ ...createItem, description: e.target.value });
  };

  return (
    <UpdateText>
      <TextArea value={createItem.description} onChange={handleChange} />
      <CreateButton
        btnName="Create"
        closeIcon="arrowhookleft"
        btnAction={() => setIsSHowDialog(true)}
        closeAction={() => setIsNext(false)}
      />
      {isShowDialog && (
        <DialogUp
          title={createItem.title}
          image={createItem.image}
          description="Would you like to add this content?"
          action={handleSubmit}
          closeDialog={() => setIsSHowDialog(false)}
        />
      )}
    </UpdateText>
  );
};

export default TextRecognition;
