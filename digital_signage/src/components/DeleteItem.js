import styled from "styled-components";
import Alert from "@enact/sandstone/Alert";
import { AlertImage } from "@enact/sandstone/Alert";
import Button from "@enact/sandstone/Button";
import Popup from "@enact/moonstone/Popup";

const DeleteItem = ({ item, handleClickItem, handleDeleteItem }) => {
  const handleClickDelete = () => {
    handleDeleteItem(item._id);
    handleClickItem(false);
  };

  const ItemLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  `;

  return (
    <Alert open="True" title="Do you want to delete?">
      <image>
        <ItemLayout>
          <AlertImage src={item.image} type="thumbnail" />
          <h2 style={{ textAlign: "center" }}>{item.title}</h2>
          <Button>Show description</Button>
        </ItemLayout>
      </image>
      <div style={{ textAlign: "center" }}>
        <Button onClick={handleClickDelete}>Delete</Button>
        <Button
          icon="closex"
          onClick={() => handleClickItem(false)}
          style={{ backgroundColor: "indianred", color: "white" }}
        />
      </div>
      <Popup open={false}>
        <pre>{item.description}</pre>
      </Popup>
    </Alert>
  );
};

export default DeleteItem;
