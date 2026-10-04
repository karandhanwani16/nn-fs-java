import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Counter fs="32px" buttonPadding="12px 40px" bg="olive" clr="beige" />
      <Counter fs="40px" buttonPadding="8px 4px" bg="blue" clr="skyblue" />
      <Counter fs="48px" buttonPadding="20px 40px" bg="green" clr="lightgreen" />
      <Counter fs="56px" buttonPadding="12px 40px" bg="yellow" clr="lightyellow" />
      <Counter fs="64px" buttonPadding="12px 40px" bg="purple" clr="lavender" />
    </div>
  );
}

export default App;
