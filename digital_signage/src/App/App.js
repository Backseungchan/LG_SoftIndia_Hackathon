import { useState, useEffect } from "react";
import ThemeDecorator from "@enact/sandstone/ThemeDecorator";
import MoonstoneDecorator from "@enact/moonstone/MoonstoneDecorator";
import ShowPage from "../views/ShowPage";
import EditPage from "../views/EditPage";
import "./App.css";
import * as API from "../api/index.js";

const App = () => {
  const [items, setItems] = useState([]);
  const [Showing, setShowing] = useState(true);
  
  useEffect(() => {
    // API.putKind("com.app.digital-signage", function () {
    //   console.log("Success putKind");
    //   API.find("com.app.digital-signage", function (res) {
    //     setItems(res.results);
    //     console.log("Success find");
    //   }, function () {
    //     console.log("Fail find");
    //   });
    // }, function () {
    //   console.log("Fail putKind");
    // });
    fetchData();
  }, []);

  async function fetchData() {
    const { data } = await API.getData();
    setItems(data);
  }

  const handleShow = (where) => {
    setShowing(where);
  };
  
  return (
    <div>
      {Showing ? (
        <ShowPage items={items} handleShow={handleShow} />
      ) : (
        <EditPage items={items} setItems={setItems} handleShow={handleShow} fetchData={fetchData} />
      )}
    </div>
  )
};

export default MoonstoneDecorator(ThemeDecorator(App));
