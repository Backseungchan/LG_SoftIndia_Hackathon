import Alert from "@enact/sandstone/Alert";
import { AlertImage } from "@enact/sandstone/Alert";
import Button from "@enact/sandstone/Button";

const DeleteItem = ({ item, handleClickItem, handleDeleteItem }) => {
  return (
    <Alert open="True" title={item.name}>
      <image>
        <AlertImage src={item.image} type="thumbnail" />
      </image>
      Are you sure you want to delete "{item.name}"
      <buttons>
        <Button onClick={handleDeleteItem}>Delete</Button>
        <Button onClick={() => handleClickItem(false)}>Cancel</Button>
      </buttons>
    </Alert>
  );
};

export default DeleteItem;
