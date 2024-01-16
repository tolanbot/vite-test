import LikeButton from "./like-button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

export default function ToDoList() {
  const [isDone1, setIsDone1] = useState(false);
  const [isDone2, setIsDone2] = useState(false);
  const [isDone3, setIsDone3] = useState(false);

  const handleItemClick = () => {
    setIsDone1(!isDone1);
  };

  const handleItemClick2 = () => {
    setIsDone2(!isDone2);
  };

  const handleItemClick3 = () => {
    setIsDone3(!isDone3);
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
        <Item
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
        />

        <Item2 name="Test The List" />
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

function Item2({ name }) {
  const [isItDone, setDone] = useState(false);

  const handleClick = () => {
    setDone(!isItDone);
  };

  return (
    <a className="test" onClick={handleClick}>
      <li
        style={{
          listStyleType: "disc",
          textAlign: "center",
          position: "relative",
        }}
      >
        <span style={{ display: "inline-block" }}>{name}</span>
        {isItDone && (
          <span style={{ position: "absolute", right: "10%" }}>✅</span>
        )}
      </li>
    </a>
  );
}

Item2.propTypes = {
  //   isDone: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  //   clickFunc: PropTypes.func.isRequired,
};

// function Item({ name, isDone }) {
//   return isDone ? (
//     <>
//       <li>{name} ✅</li>
//     </>
//   ) : (
//     <li>{name}</li>
//   );
// }
