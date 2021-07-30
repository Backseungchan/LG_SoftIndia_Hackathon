import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://192.168.0.16:9998');

const CarouselCard = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [halt, setHalt] = useState(false);
  const [read, setRead] = useState(false);

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
        if (e.data === "Found" && read === false && halt === false) {
          setHalt(true);
          setRead(true);
          client.send(JSON.stringify({response: true, text: items[index]?.description}));
        } 
        else if (e.data === "Done") {
          setHalt(false);
        }
        else {
          client.send(JSON.stringify({response: false}));
        }
        
    };
  }, [items, index, halt, read]);

  function handleChange(idx) {
    setIndex(idx);
    setRead(false);
  }

  return (
    <Carousel
      autoPlay={!halt}
      showStatus={false}
      showThumbs={false}
      infiniteLoop
      interval={8000}
      stopOnHover={false}
      onChange={handleChange}
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