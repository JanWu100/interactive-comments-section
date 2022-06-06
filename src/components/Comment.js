import React from "react";
import classes from "./Comment.module.css";
import CommentControl from "./Buttons/CommentControl";

const Comment = (props) => {
  const isCurrentUser = props.isCurrentUser;

  return (
    <article className={classes.comment}>
      <div className={classes["author-wrapper"]}>
        <img className={classes.avatar} src={props.user.image.png} alt=""></img>
        <p className={classes.author}>{props.user.username}</p>
        {isCurrentUser ? <span className={classes.badge}>you</span> : ""}
        <p className={classes.date}>{props.createdAt}</p>
      </div>

      <p className={classes["comment-body"]}>{props.content}</p>

      <div className={classes.quantity}>
        <button className={classes.btn}>+</button>
        <input
          type="number"
          value={props.score}
          min="0"
          step="1"
          max="100"
          disabled
        ></input>
        <button className={classes.btn}>-</button>
      </div>

      <div className={classes.control}>
        <CommentControl type="edit" />
        {/* <CommentControl type="delete" /> */}
        <CommentControl />
      </div>
    </article>
  );
};

export default Comment;
