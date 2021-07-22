import { makeStyles } from "@material-ui/core/styles";
import FileBase from "react-file-base64";

import ImageModal from "./ImageModal";

const useStyles = makeStyles({
  createImgLayout: {
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const CreateImage = ({ input, setInput }) => {
  const classes = useStyles();

  return (
    <div className={classes.createImgLayout}>
      <FileBase
        type="file"
        multiple={false}
        onDone={(file) => setInput({ ...input, imgBase64: file.base64 })}
      />
      <ImageModal input={input} />
    </div>
  );
};

export default CreateImage;
