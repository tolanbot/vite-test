import LikeButton from "./like-button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function ToDoList() {
  const [items, setItems] = useState([]);

  const handleItemClick = (index) => {
    const newItems = [...items];
    newItems[index].isDone = !newItems[index].isDone;
    setItems(newItems);
  };

  const addItem = (itemName) => {
    setItems([...items, { name: itemName, isDone: false }]);
  };

  useEffect(() => {
    if (items.length > 0 && items.every((item) => item.isDone)) {
      console.log("All Items Completed");
    }
  }, [items]);

  return (
    <>
      <h1>Hedy Lamarr&apos;s Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <AddItemForm onAddItem={addItem} />
      <ul>
        {items.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            isDone={item.isDone}
            clickFunc={() => handleItemClick(index)}
          />
        ))}
      </ul>
      <br></br>
      <LikeButton />
      <br></br>
      <Link to="/">Go Back To Home Page</Link>
    </>
  );
}

function Item({ name, isDone, clickFunc }) {
  return (
    <a className="test" onClick={clickFunc}>
      <li
        style={{
          listStyleType: "disc",
          textAlign: "center",
          position: "relative",
        }}
      >
        <span style={{ display: "inline-block" }}>{name}</span>
        {isDone && (
          <span style={{ position: "absolute", right: "10%" }}>✅</span>
        )}
      </li>
    </a>
  );
}

Item.propTypes = {
  isDone: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  clickFunc: PropTypes.func.isRequired,
};

function AddItemForm({ onAddItem }) {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddItem(inputValue);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add New Item"
      ></input>
      <button type="submit">Add</button>
    </form>
  );
}
AddItemForm.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};

// function Item2({ name }) {
//   const [isItDone, setDone] = useState(false);

//   const handleClick = () => {
//     setDone(!isItDone);
//   };

//   return (
//     <a className="test" onClick={handleClick}>
//       <li
//         style={{
//           listStyleType: "disc",
//           textAlign: "center",
//           position: "relative",
//         }}
//       >
//         <span style={{ display: "inline-block" }}>{name}</span>
//         {isItDone && (
//           <span style={{ position: "absolute", right: "10%" }}>✅</span>
//         )}
//       </li>
//     </a>
//   );
// }

// Item2.propTypes = {
//   name: PropTypes.string.isRequired,
// };

// function addItemForm() {
//   let itemNum = 1;
//   const taskArray = [];
//   return <input type="text"></input>;
// }

// function Item({ name, isDone }) {
//   return isDone ? (
//     <>
//       <li>{name} ✅</li>
//     </>
//   ) : (
//     <li>{name}</li>
//   );
// }

{
  /* <Item
className="item1"
name="Invent New Traffic Lights"
isDone={isDone1}
clickFunc={handleItemClick}
/>

<Item
className="item2"
name="Rehearse a movie scene"
isDone={isDone2}
clickFunc={handleItemClick2}
/>

<Item
className="item3"
name="Improve the spectrum technology"
isDone={isDone3}
clickFunc={handleItemClick3}
/> */
}
