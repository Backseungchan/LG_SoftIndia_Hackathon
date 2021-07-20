import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Paper } from '@material-ui/core';

import * as API from "./api/index.js";

const init = {
  title: "",
  imgBase64: "",
  description: ""
};

function App() {
  const [input, setInput] = useState(init);
  const [file, setFile] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    API.createData(input);
    setInput(init);
  }

  function handleFileChange(e) {
    const reader = new FileReader();
    reader.onloadend = () => {
      // 읽기 완료 후 아래 코드 실행
      const base64 = reader.result;
      if (base64) {
        setInput({...input, imgBase64: base64.toString()}); // 파일 base64 상태 업데이트
      }
    }
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]); // 파일을 읽어 버퍼에 저장
      setFile(e.target.files[0]); // 파일 상태 업데이트
    }
  }

  return (
    <div className="App">
      <div>
        <img src={input.imgBase64} alt="img" />
      </div>
      <Paper>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <TextField variant="outlined" label="title" value={input.title} onChange={(e) => setInput({...input, title: e.target.value})} />
          <TextField multiline rows={4} variant="outlined" label="description" value={input.description} onChange={(e) => setInput({...input, description: e.target.value})} />
          <input type="file" onChange={handleFileChange} />
          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </form>
      </Paper>
    </div>
  );
}

export default App;
