import LikeButton from "./like-button";
import { Link } from "react-router-dom";

export default function ToDoList() {
  return (
    <>
      <h1>Hedy Lamarr&apos;s Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
      <br></br>
      <LikeButton />
      <br></br>
      <Link to="/">Go Back To Home Page</Link>
    </>
  );
}
