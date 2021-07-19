import Alert from "@enact/sandstone/Alert";
import { AlertImage } from "@enact/sandstone/Alert";
import Button from "@enact/sandstone/Button";
import BodyText from "@enact/moonstone/BodyText";
import Scroller from "@enact/sandstone/Scroller";

const DeleteItem = ({ item, handleClickItem, handleDeleteItem }) => {
  const handleClickDelete = () => {
    handleDeleteItem(item._id);
    handleClickItem(false);
  };
  return (
    <Alert open="True" title="Do you want to delete?">
      <image>
        <AlertImage src={item.image} type="thumbnail" />
        <h2 style={{ textAlign: "center" }}>{item.title}</h2>
        <Scroller>
          <pre>{item.description}</pre>
        </Scroller>
      </image>
      <div style={{ textAlign: "center" }}>
        <Button onClick={handleClickDelete}>Delete</Button>
        <Button
          icon="closex"
          onClick={() => handleClickItem(false)}
          style={{ backgroundColor: "indianred", color: "white" }}
        />
      </div>
    </Alert>
  );
};

export default DeleteItem;
