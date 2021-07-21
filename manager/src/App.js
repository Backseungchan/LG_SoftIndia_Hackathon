import { useState, useEffect } from "react";

import Header from "./components/Header.js";
import ItemList from "./Views/ItemList.js";
import CreateItem from "./Views/CreateItem.js";

import * as API from "./api/index.js";

function App() {
  const [isItemList, setIsItemList] = useState(true);
  const [items, setItems] = useState([]);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setPending(true);
    const { data } = await API.getData();
    setPending(false);
    setItems(data);
  }
  

  return (
    <div className="App" style={{ height: "100vh" }}>
      <Header isItemList={isItemList} setIsItemList={setIsItemList} />
      {isItemList ? (
        <ItemList items={items}  />
      ) : (
        <CreateItem setIsItemList={setIsItemList} />
      )}
    </div>
  );
}

export default App;
