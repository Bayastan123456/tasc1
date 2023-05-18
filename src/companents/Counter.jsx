import React, { useState } from "react";

const Counter = () => {
  let [nums, setNums] = useState(0);
  return (
    <>
      <div>{nums}</div>
      <button onClick={() => setNums(++nums)}>Plus</button>
      <button onClick={() => setNums(--nums)}>Minus</button>
      <button onClick={() => setNums(0)}>result</button>
    </>
  );
};

export default Counter;
