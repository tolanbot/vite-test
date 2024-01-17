import LikeButton from "./like-button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";

export default function ToDoList() {
  const [items, setItems] = useState([]);
  const [allDone, setAllDone] = useState(false);

  const handleItemClick = (index) => {
    const newItems = [...items];
    newItems[index].isDone = !newItems[index].isDone;
    setItems(newItems);
  };

  const addItem = (itemName) => {
    setItems([...items, { name: itemName, isDone: false }]);
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, itemIndex) => index !== itemIndex);
    setItems(newItems);
  };

  useEffect(() => {
    const allAreDone = items.length > 0 && items.every((item) => item.isDone);
    setAllDone(allAreDone);
  }, [items]);

  return (
    <>
      <h1>Hedy Lamarr&apos;s To-Do&apos;s</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <AddItemForm onAddItem={addItem} />
      <ul>
        {items.map((item, index) => {
          return (
            <Item
              key={index}
              name={item.name}
              isDone={item.isDone}
              clickFunc={() => handleItemClick(index)}
              removeFunc={() => removeItem(index)}
            />
          );
        })}
      </ul>
      <br></br>
      <div className="all-done-container">
        {allDone && <h2 className="all-done">All Items Complete</h2>}
      </div>
      <div className="like-button">
        <LikeButton />
        <br></br>
        <Link to="/">Go Back To Home Page</Link>
      </div>
    </>
  );
}

function Item({ name, isDone, clickFunc, removeFunc }) {
  const handleRemoveClick = (e) => {
    e.stopPropagation();
    removeFunc();
  };
  return (
    <li className="item" onClick={clickFunc}>
      <span>{name}</span>
      {isDone && <span className="checkmark">✅</span>}
      <button className="item-button" onClick={handleRemoveClick}>
        Remove
      </button>
    </li>
  );
}

Item.propTypes = {
  isDone: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  clickFunc: PropTypes.func.isRequired,
  removeFunc: PropTypes.func.isRequired,
};

function AddItemForm({ onAddItem }) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Set focus on the input element
    }
  }, []);

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
        ref={inputRef}
        name="submitItem"
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
