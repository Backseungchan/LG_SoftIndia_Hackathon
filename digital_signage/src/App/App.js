import { useState } from "react";
import ThemeDecorator from "@enact/sandstone/ThemeDecorator";
import MoonstoneDecorator from "@enact/moonstone/MoonstoneDecorator";
import ShowPage from "../views/ShowPage";
import EditPage from "../views/EditPage";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([
    {
      _id: 0,
      title: "ipad pro",
      image:
        "https://i.expansys.net/img/b/322289/apple-ipad-pro-11-4th-gen-2020.jpg",
    },
    {
      _id: 1,
      title: "iPhone 12",
      image:
        "https://www.mytrendyphone.eu/images/New-Style-Matte-iPhone-12-Pro-Max-TPU-Case-Kickstand-Black-03122020-01_135785260-p.jpg",
    },
    {
      _id: 2,
      title: "Apple Watch",
      image:
        "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/44-alum-spacegray-sport-black-se-cell?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1599811804000",
    },
    {
      _id: 3,
      title: "Bicycle",
      image:
        "https://cdn.mec.ca/medias/sys_master/high-res/high-res/8796563996702/5041357-BK000.jpg",
    },
  ]);
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

export default MoonstoneDecorator(ThemeDecorator(App));
