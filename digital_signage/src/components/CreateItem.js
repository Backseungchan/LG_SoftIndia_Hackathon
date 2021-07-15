import React, { Fragment } from "react";
import styled from "styled-components";
import Alert from "@enact/sandstone/Alert";
import Input from "@enact/moonstone/Input";
import Button from "@enact/sandstone/Button";

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
          <span>TITLE</span>
          <Input
            placeholder="Please enter a title"
            onChange={(input) => {
              createItem.title = input.value;
            }}
          />
        </CreateInput>
        <CreateInput>
          <span>IMAGE URL</span>
          <Input
            placeholder="Please enter a image url"
            onChange={(input) => {
              createItem.image = input.value;
            }}
          />
        </CreateInput>
        <div>
          <Button onClick={handleSubmit}>Create</Button>
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
