import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselCard = ({ items }) => {
  return (
    <Carousel
      autoPlay={true}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      interval={5000}
      stopOnHover={false}
    >
      {items.map((item) => (
        <div>
          <img style={{ height: "100vh", width: "auto" }} src={item.image} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselCard;