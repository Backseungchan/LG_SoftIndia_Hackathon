import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { w3cwebsocket as W3CWebSocket } from "websocket";

import * as API from "../api/index.js";
const client = new W3CWebSocket('ws://222.104.206.186:9998');

const CarouselCard = ({ items }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    client.onerror = function() {
        console.log('Connection Error');
    };

    client.onopen = function() {
        console.log('Client Connected');
    };

    client.onclose = function() {
        console.log('Client Closed');
    };

    client.onmessage = function(e) {
        if (e.data === "True") {
          API.speak(items[index].description, function () {
            console.log("Success speak");
          }, function () {
            console.log("Fail speak");
          })
        }
    };
  }, [items, index]);

  return (
    <Carousel
      autoPlay
      showStatus={false}
      showThumbs={false}
      infiniteLoop
      interval={5000}
      stopOnHover={false}
      onChange={(idx) => setIndex(idx)}
    >
      {items.map((item) => (
        <div>
          <img style={{ height: "100vh", width: "auto" }} src={item.imgBase64} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselCard;