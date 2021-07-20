import { useState, useEffect } from "react";
import ThemeDecorator from "@enact/sandstone/ThemeDecorator";
import MoonstoneDecorator from "@enact/moonstone/MoonstoneDecorator";
import ShowPage from "../views/ShowPage";
import EditPage from "../views/EditPage";
import Spinner from '@enact/sandstone/Spinner';
import styled from "styled-components";

import "./App.css";
import * as API from "../api/index.js";
import Alert from "@enact/sandstone/Alert";

const App = () => {
  const [items, setItems] = useState([]);
  const [Showing, setShowing] = useState(true);
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

  const handleShow = (where) => {
    setShowing(where);
  };

  const ItemLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  `;
  
  return (
    <div>
      {pending && 
        <Alert open="True">
          <ItemLayout>
            <Spinner blockClickOn="container">Loading...</Spinner>
          </ItemLayout>
        </Alert>
      }
      {Showing ? (
        <ShowPage items={items} handleShow={handleShow} />
      ) : (
        <EditPage items={items} setItems={setItems} handleShow={handleShow} fetchData={fetchData} />
      )}
    </div>
  )
};

export default MoonstoneDecorator(ThemeDecorator(App));
