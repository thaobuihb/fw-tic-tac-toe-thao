import React from "react";

function Square({value, handleOnClick}) {
  return (
    <button className={"square"} onClick={handleOnClick}>
      {value}
    </button>
  );
}

export default Square;
