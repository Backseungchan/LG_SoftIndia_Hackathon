import { useState } from "react";
import ThemeDecorator from "@enact/sandstone/ThemeDecorator";

import ShowPage from "../views/ShowPage";
import EditPage from "../views/EditPage";

const App = () => {
  const [Showing, setShowing] = useState(false);

  const handleShow = () => {
    setShowing(true);
  };
  const handleEdit = () => {
    setShowing(false);
  };
  // return <div>{Showing ? <ShowPage func={handleShow} /> : <EditPage />}</div>;
  return (
    <div>
      <ShowPage />
    </div>
  );
};

export default ThemeDecorator(App);
