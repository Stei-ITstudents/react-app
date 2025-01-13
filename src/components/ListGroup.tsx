// import { MouseEvent, useState } from "react";
import { useState } from "react";

// {items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem?: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //   items = [];
  //   let selectedIndex = 0;
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   arr[0]; // variable (selectedIndex)
  //   arr[1]; // updater function (setSelectedIndex)
  //   const [name, setNAme] = useState("");

  //   const handleClick = (event: MouseEvent) => {
  //     console.log(event);
  //   };

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem && onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
