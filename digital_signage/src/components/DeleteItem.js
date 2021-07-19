import Alert from "@enact/sandstone/Alert";
import { AlertImage } from "@enact/sandstone/Alert";
import Button from "@enact/sandstone/Button";

const DeleteItem = ({ item, handleClickItem, handleDeleteItem }) => {
  const handleClickDelete = () => {
    handleDeleteItem(item._id);
    handleClickItem(false);
  };
  return (
    <Alert open="True" title={item.title}>
      <image>
        <AlertImage src={item.image} type="thumbnail" />
      </image>
      Are you sure you want to delete "{item.title}"
      <buttons>
        <Button onClick={handleClickDelete}>Delete</Button>
        <Button onClick={() => handleClickItem(false)}>Cancel</Button>
      </buttons>
    </Alert>
  );
};

export default DeleteItem;
