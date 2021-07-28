import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  showImage: {
    paddingBottom: "30px",
  },
});

const ShowImage = ({ item, width }) => {
  const classes = useStyles();

  return (
    <img
      src={item.imgBase64}
      alt={item.title + " img"}
      width={width}
      className={classes.showImage}
    />
  );
};

export default ShowImage;
