import React, { useState } from "react";
import styled from "styled-components";
import Alert from "@enact/sandstone/Alert";
import Input from "@enact/moonstone/Input";
import Button from "@enact/sandstone/Button";
import Changeable from "@enact/ui/Changeable";

const CreateItem = ({ handleClickCreate, handleCreateItem }) => {
  let createItem = { title: "", image: "" };

  const handleSubmit = () => {
    handleClickCreate(false);
    handleCreateItem(createItem);
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
          <span>title</span>
          <Input
            placeholder="Please enter a title"
            onChange={(value) => {
              createItem.title = value;
            }}
          />
        </CreateInput>
        <CreateInput>
          <span>image url</span>
          <Input
            placeholder="Please enter a image url"
            onChange={(value) => {
              createItem.image = value;
            }}
          />
        </CreateInput>
        <div>
          <Button type="submit" onClick={handleSubmit}>
            Create
          </Button>
          <Button
            icon="closex"
            onClick={() => handleClickCreate(false)}
            style={{ backgroundColor: "indianred" }}
          ></Button>
        </div>
      </form>
    </Alert>
  );
};

export default CreateItem;
