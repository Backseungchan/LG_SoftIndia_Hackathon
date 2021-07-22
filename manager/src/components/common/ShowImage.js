const ShowImage = ({ item, width }) => {
  return (
    <img
      src={item.imgBase64}
      alt={item.title + " img"}
      style={{ width: `${width}`, border: "1px solid" }}
    />
  );
};

export default ShowImage;
