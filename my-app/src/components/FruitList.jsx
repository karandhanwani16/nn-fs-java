// import { useState } from "react";

// function FruitList() {
//   const fruitArr = [
//     "apple",
//     "banana",
//     "cherry",
//     "date",
//     "elderberry",
//     "fig",
//     "grape",
//     "honeydew",
//     "kiwi",
//     "lemon",
//     "apple",
//     "lime",
//     "mango",
//     "nectarine",
//     "orange",
//     "pear",
//     "pineapple",
//     "plum",
//     "raspberry",
//     "strawberry",
//     "tangerine",
//     "watermelon",
//   ];

//   const [fruits] = useState(fruitArr);

//   return <ul>
//     {
//         fruits.map((fruit,i)=>{
//             return <li key={i}>{fruit}</li>
//         })
//     }
//   </ul>;
// }

// export default FruitList;

import { useState } from "react";
import "./fruit-list.css"
function FruitList() {
  const fruitArr = [
    {
      name: "apple",
      color: "red",
      price: 1.0,
      image: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "banana",
      color: "yellow",
      price: 0.5,
      image: "https://via.placeholder.com/150/771796",
    },
    {
      name: "cherry",
      color: "red",
      price: 2.0,
      image: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "date",
      color: "brown",
      price: 3.0,
      image: "https://via.placeholder.com/150/f3f3f3",
    },
    {
      name: "elderberry",
      color: "purple",
      price: 4.0,
      image: "https://via.placeholder.com/150/c7ecdc",
    },
    {
      name: "fig",
      color: "brown",
      price: 5.0,
      image: "https://via.placeholder.com/150/f3c65d",
    },
  ];

  const [fruits] = useState(fruitArr);

  return (
    <ul className="fruit-list" style={{display: "flex", flexDirection: "column", gap: "16px"}}>
      {fruits.map((fruit, i) => {
        return (
          <li
            key={i}
            style={{ display: "flex", alignItems: "center", gap: "24px",padding: "16px", backgroundColor: "#f6f5f4", borderRadius: "12px" }}
          >
            <img src={fruit.image} alt="" />
            <div>
              <p>Name: {fruit.name}</p>
              <p style={{ display: "flex", gap: "12px" }}>
                Color:{" "}
                <span
                  style={{
                    backgroundColor: fruit.color,
                    height: "16px",
                    width: "16px",
                    borderRadius: "4px",
                    display: "block",
                  }}
                ></span>
              </p>
              <p>Price: Rs. {fruit.price}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default FruitList;
