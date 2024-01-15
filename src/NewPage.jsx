import { Link } from "react-router-dom";
import Profile from "./Profile";
import LikeButton from "./like-button";
export default function NewPage() {
  return (
    <>
      <h1>New Page</h1>
      <Profile src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />
      <br></br>
      <LikeButton />
      <Link to="/">Go Back To Home Page</Link>
    </>
  );
}
