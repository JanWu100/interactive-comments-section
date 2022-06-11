import React, { useState,useContext } from "react";
import UserContext from "./context/userContext";
import classes from "./UserInput.module.css";

const UserInput = ({ id, user, addReply }) => {
  const currentUser = useContext(UserContext)
  const [input, setInput] = useState(id ? `@${user.username}, ` : "");
  const clickHandler = (event) => {
    const indexOfSpace = input.indexOf(" ");
    const inputParsed = input.slice(indexOfSpace, input.length);

    const value = {
      id: Math.random(),
      content: id ? inputParsed : input,
      createdAt: "1 second ago",
      score: 0,
      user: {
        image: {
          png: currentUser.image.png,
          webp: currentUser.image.webp,
        },
        username: currentUser.username,
      },
      replies: [],
    };
    addReply(value);
  };
  const onChangeHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className={classes.card}>
      <img className={classes.avatar} src={currentUser.image.png} alt=""></img>
      <textarea
        rows="4"
        maxLength="120"
        placeholder="Add a comment..."
        value={input}
        onChange={onChangeHandler}
      ></textarea>
      <button className={classes.btn} onClick={clickHandler}>
        {id ? "reply" : "send"}
      </button>
    </div>
  );
};

export default UserInput;
