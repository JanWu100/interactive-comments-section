import React from "react";
import classes from "./Reply.module.css";
import CommentControl from "./Buttons/CommentControl";

const Reply = (props) => {
  const isCurrentUser =
    props.currentUser.username === props.user.username ? true : false;



  return (
    <>
      <article className={classes.reply}>
        <div className={classes["author-wrapper"]}>
          <img
            className={classes.avatar}
            src={props.user.image.png}
            alt=""
          ></img>
          <p className={classes.author}>{props.user.username}</p>
          {isCurrentUser ? <span className={classes.badge}>you</span> : ""}
          <p className={classes.date}>{props.createdAt}</p>
        </div>

        <p className={classes["comment-body"]}>
          <span className={classes.link}>{`@` + props.replyingTo + " "}</span>
          {props.content}
        </p>

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
          {isCurrentUser ? (
            <>
              <CommentControl type="delete" />{" "}
              <CommentControl type="edit"  />
            </>
          ) : (
            <CommentControl />
          )}
        </div>
      </article>
      
    </>
  );
};

export default Reply;
