import { useState } from "react";
import ThemeDecorator from "@enact/sandstone/ThemeDecorator";
import ShowPage from "../views/ShowPage";
import EditPage from "../views/EditPage";
import "./App.css";

const App = () => {
  const [Showing, setShowing] = useState(true);

  const handleShow = (where) => {
    setShowing(where);
  };

  return (
    <div>
      {Showing ? (
        <ShowPage handleShow={handleShow} />
      ) : (
        <EditPage handleShow={handleShow} />
      )}
    </div>
  );
};

export default ThemeDecorator(App);
