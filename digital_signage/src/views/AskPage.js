import Alert from "@enact/sandstone/Alert";
import { AlertImage } from "@enact/sandstone/Alert";
import Button from "@enact/sandstone/Button";

const AskPage = ({ item, cancelDelete, deleteItem }) => {
  return (
    <Alert open="True" title={item.name}>
      <image>
        <AlertImage src={item.image} type="thumbnail" />
      </image>
      Are you sure you want to delete "{item.name}"
      <buttons>
        <Button onClick={deleteItem}>Delete</Button>
        <Button onClick={cancelDelete}>Cancel</Button>
      </buttons>
    </Alert>
  );
};

export default AskPage;
