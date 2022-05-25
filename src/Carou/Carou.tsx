import React from "react";
import Carousel from "react-material-ui-carousel";

import "./styles.css";

function Item({ item }: { item: { description: string } }) {
  return (
    <div style={{ width: "100%", height: "100%" }}>{item.description}</div>
  );
}

export default function Carou() {
  var items = [
    {
      name: "Random Name #1",
      description: "1 - Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #2",
      description: "2- Hello World!"
    },
    {
      name: "Random Name #3",
      description: "3 - Hello World!"
    }
  ];

  const [index, setIndex] = React.useState(0);

  

  return (
    <div>
      <Carousel
        index={index}
        interval={4000}
        animation="slide"
        indicators={false}
        stopAutoPlayOnHover
        swipe
        className="my-carousel"
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      {items.map((item, i) => (
        <button
          onClick={() => setIndex(i)}
          style={{ background: i === index ? "#ccc" : "#fff" }}
        >
          {i}
        </button>
      ))}
    </div>
  );
}
