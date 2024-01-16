import LikeButton from "./like-button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

export default function ToDoList() {
  const [isDone, setIsDone] = useState(false);

  const handleItemClick = () => {
    setIsDone(!isDone);
  };
  return (
    <>
      <h1>Hedy Lamarr&apos;s Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <a className="test" onClick={handleItemClick}>
          <Item
            className="item1"
            name="Invent New Traffic Lights!"
            isDone={isDone}
          />
        </a>
        <a className="test" onClick={handleItemClick}>
          <Item
            className="item2"
            name="Rehearse a movie scene"
            isDone={isDone}
          />
        </a>
        <a className="test" onClick={handleItemClick}>
          <Item
            className="item3"
            name="Improve the spectrum technology"
            isDone={isDone}
          />
        </a>
      </ul>
      <br></br>
      <LikeButton />
      <br></br>
      <Link to="/">Go Back To Home Page</Link>
    </>
  );
}

// function Item({ name, isDone }) {
//   return isDone ? (
//     <>
//       <li>{name} ✅</li>
//     </>
//   ) : (
//     <li>{name}</li>
//   );
// }

function Item({ name, isDone }) {
  return (
    <li
      style={{
        listStyleType: "disc",
        textAlign: "center",
        position: "relative",
      }}
    >
      <span style={{ display: "inline-block" }}>{name}</span>
      {isDone && <span style={{ position: "absolute", right: "10%" }}>✅</span>}
    </li>
  );
}

Item.propTypes = {
  isDone: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
