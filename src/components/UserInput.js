import React, { useState } from "react";
import classes from "./UserInput.module.css";

const UserInput = ({ userMe, id, user, addReply }) => {
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
          png: userMe.image.png,
          webp: userMe.image.webp,
        },
        username: userMe.username,
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
      <img className={classes.avatar} src={userMe.image.png} alt=""></img>
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
