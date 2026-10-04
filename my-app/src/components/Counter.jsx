// function Counter() {
//   return <h1 style={{ backgroundColor: "red", color: "orange" }}>New Counter</h1>;
// }

// export default Counter;
// import "./style.css";

// function Counter() {
//   return <h1 className="counter">New Counter</h1>;
// }

// export default Counter;

import { useState } from "react";

function Counter(props) {
  // var count = 0;

  //   console.log(props)

  const { bg, clr, fs, buttonPadding } = props;

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div
      style={{
        backgroundColor: bg,
        padding: "20px",
        marginRight: "16px",
        display: "inline-block",
        borderRadius: "12px",
      }}
    >
      <h1 style={{ color: clr, textAlign: "center", fontSize: fs }}>
        {count}
      </h1>
      <div style={{ display: "flex", gap: "12px" }}>
        <button
          style={{
            background: clr,
            color: bg,
            border: "0",
            padding: buttonPadding,
            borderRadius: "12px",
          }}
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          style={{
            background: clr,
            color: bg,
            border: "0",
            padding: buttonPadding,
            borderRadius: "12px",
          }}
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;


// new line added