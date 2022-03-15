import React from "react";

function List(props) {
  return (
    <div
      onClick={() => {
        props.deleteItem(props.id);
      }}
    >
      <li>{props.element}</li>
    </div>
  );
}

export default List;
