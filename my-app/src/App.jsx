import { useState } from "react";
import Counter from "./components/Counter";
import FruitList from "./components/FruitList";
import Forms from "./components/Forms";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleCounterVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <Forms />

      {/* <h1>Hello World</h1> */}

      {/* <button onClick={handleCounterVisibility}>
        {isVisible ? "Hide" : "Show"}
      </button>
      <br />
      <br />
      <br />
      {isVisible && (
        <Counter fs="40px" buttonPadding="12px 40px" bg="olive" clr="beige" />
      )} */}

      {/* <FruitList /> */}

      {/* <Counter fs="40px" buttonPadding="8px 4px" bg="blue" clr="skyblue" />
      <Counter
        fs="48px"
        buttonPadding="20px 40px"
        bg="green"
        clr="lightgreen"
      />
      <Counter
        fs="56px"
        buttonPadding="12px 40px"
        bg="yellow"
        clr="lightyellow"
      />
      <Counter fs="64px" buttonPadding="12px 40px" bg="purple" clr="lavender" /> */}
    </div>
  );
}

export default App;
