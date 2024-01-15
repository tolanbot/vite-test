
// import { useState, useEffect} from "react";

// export default function LikeButton(initialLikes){

//     // const [likes,setLikes] = useState(0);
//     const [likes, setLikes] = useState(() => {
//         if (typeof window !== "undefined") {
//           const storedLikes = localStorage.getItem("likes");
//           return storedLikes ? parseInt(storedLikes, 10) : 0;
//         }
//         return 0;
//       });
    
//     useEffect(() => {
//     localStorage.setItem("likes", likes.toString());
//     }, [likes]);

//     function handleClick(){
//         setLikes(likes + 1)
//         console.log(`likes incremented: ${likes+1}`)
//     }
//     return <button onClick={handleClick}>Like ({likes})</button>;
// }

import { useState, useEffect } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    // Check if window is defined (client side) before using localStorage
    if (typeof window !== "undefined") {
      // Get likes from local storage or default to 0
      const storedLikes = localStorage.getItem("likes");
      setLikes(storedLikes ? parseInt(storedLikes, 10) : 0);
    }
  }, []);

  useEffect(() => {
    // Update localStorage whenever likes change
    if (typeof window !== "undefined") {
      localStorage.setItem("likes", likes.toString());
    }
  }, [likes]);

  function handleClick() {
    setLikes((prevLikes) => prevLikes + 1);
  }

  return <button onClick={handleClick}>Like ({likes})</button>;
}
