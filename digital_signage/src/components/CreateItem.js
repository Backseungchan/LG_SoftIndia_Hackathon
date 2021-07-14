import React from "react";
import Alert from "@enact/sandstone/Alert";
import Input from "@enact/moonstone/Input";
import Button from "@enact/sandstone/Button";

const CreateItem = ({ handleClickCreate, handleCreateItem }) => {
  const handleSubmit = () => {};

  return (
    <Alert open="True">
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Input placeholder="Please enter a title" />
        <Button type="submit">Create</Button>
        <Button onClick={() => handleClickCreate(false)}>Cancel</Button>
      </form>
    </Alert>
  );
};

export default CreateItem;
