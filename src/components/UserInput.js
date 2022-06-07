import React from "react";
import classes from "./UserInput.module.css";

const UserInput = (props) => {
  const userMe = props.userMe
  return (
    <div className={classes.card}>
      <img className={classes.avatar} src={userMe.image.png} alt=""></img>
      <textarea
        rows="4"
        maxLength="120"
        placeholder="Add a comment..."
        defaultValue={ props.id ? `@${props.user.username}, ` : ""}
      >
       
      </textarea>
      <button className={classes.btn}>{props.id ? "reply" : "send"}</button>
    </div>
  );
};

export default UserInput;
