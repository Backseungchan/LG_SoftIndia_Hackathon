import { useState } from "react";

import * as API from "./api/index.js";
import Header from "./components/Header.js";
import ItemList from "./Views/ItemList.js";
import CreateItem from "./Views/CreateItem.js";

const init = {
  title: "",
  imgBase64: "",
  description: "",
};

function App() {
  const [input, setInput] = useState([init]);
  const [file, setFile] = useState(null);
  const [isItemList, setIsItemList] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    API.createData(input);
    setInput(init);
    setIsItemList(true);
  }

  function handleFileChange(e) {
    const reader = new FileReader();
    reader.onloadend = () => {
      // 읽기 완료 후 아래 코드 실행
      const base64 = reader.result;
      if (base64) {
        setInput({ ...input, imgBase64: base64.toString() }); // 파일 base64 상태 업데이트
        console.log(input);
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]); // 파일을 읽어 버퍼에 저장
      setFile(e.target.files[0]); // 파일 상태 업데이트
    }
  }

  return (
    <div className="App" style={{ height: "100vh" }}>
      <Header isItemList={isItemList} setIsItemList={setIsItemList} />
      {isItemList ? (
        <ItemList input={input} setInput={setInput} />
      ) : (
        <CreateItem
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
          handleFileChange={handleFileChange}
        />
      )}
    </div>
  );
}

export default App;
