import { makeStyles } from "@material-ui/core/styles";

import ShowImage from "./ShowImage";

const useStyles = makeStyles({
  createImgLayout: {
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
  },
});

const CreateImage = ({ input, handleFileChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.createImgLayout}>
      <input
        type="file"
        style={{ marginBottom: "30px" }}
        onChange={handleFileChange}
      />
      <ShowImage input={input} />
    </div>
  );
};

export default CreateImage;
