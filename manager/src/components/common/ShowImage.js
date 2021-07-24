import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  showImage: {
    border: "2px solid",
    boxShadow: "3px 3px"
  }
})

const ShowImage = ({ item, width }) => {
  const classes = useStyles;

  return (
    <img
      src={item.imgBase64}
      alt={item.title + " img"}
      width= {width}
      className={classes}
    />
  );
};

export default ShowImage;
