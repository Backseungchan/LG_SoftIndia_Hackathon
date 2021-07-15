import { useState } from "react";
import ThemeDecorator from "@enact/sandstone/ThemeDecorator";
import ShowPage from "../views/ShowPage";
import EditPage from "../views/EditPage";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [Showing, setShowing] = useState(true);

  const handleShow = (where) => {
    setShowing(where);
  };

  return (
    <div>
      {Showing ? (
        <ShowPage items={items} handleShow={handleShow} />
      ) : (
        <EditPage items={items} setItems={setItems} handleShow={handleShow} />
      )}
    </div>
  );
};

export default ThemeDecorator(App);
