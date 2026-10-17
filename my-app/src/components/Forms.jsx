import { useState } from "react";
import "./forms.css";
function Forms() {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <form>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter Text"
      />
      <p>{text === "" ? "Start Typing..." : text}</p>
    </form>
  );
}

export default Forms;
