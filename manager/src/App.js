import { useState, useEffect } from "react";

import ItemList from "./Views/ItemList.js";
import CreateItem from "./Views/CreateItem.js";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

import * as API from "./api/index.js";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function App() {
  const [isItemList, setIsItemList] = useState(true);
  const [items, setItems] = useState([]);
  const [pending, setPending] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setPending(true);
    const { data } = await API.getData();
    setItems(data);
    setPending(false);
  }

  const handleItemList = () => setIsItemList(!isItemList);

  return (
    <div className="App" style={{ height: "100vh" }}>
      <Backdrop className={classes.backdrop} open={pending}>
        <CircularProgress color="inherit" />
      </Backdrop>

      {isItemList ? (
        <ItemList
          items={items}
          setItems={setItems}
          setPending={setPending}
          handleItemList={handleItemList}
        />
      ) : (
        <CreateItem
          items={items}
          setItems={setItems}
          setPending={setPending}
          handleItemList={handleItemList}
        />
      )}
    </div>
  );
}

export default App;
