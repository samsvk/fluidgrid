import Masonry from "./masonry";
import { useEffect, useState, useRef } from "react";
import Item from "./item";

let URL = "https://jsonplaceholder.typicode.com/posts";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export default function Grid() {
  const container = useRef(null);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  let size = {
    height: container?.current?.getBoundingClientRect().height,
    width: container?.current?.getBoundingClientRect().width,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {data.map((item) => (
        <div>{item.title}</div>
      ))}
    </Masonry>
  );
}
