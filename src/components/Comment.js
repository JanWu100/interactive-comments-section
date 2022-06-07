import React from "react";
import classes from "./Comment.module.css";
import CommentControl from "./Buttons/CommentControl";
import Reply from "./Reply";

const Comment = (props) => {
  const isCurrentUser =
    props.currentUser.username === props.user.username ? true : false;
  const replies = props.replies;

  const replyHandler = () => {
    console.log("aaa")
  }


  return (
    <div>
      <article className={classes.comment}>
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
          {isCurrentUser ? (
            <>
              <CommentControl type="delete" /> <CommentControl type="edit" />
            </>
          ) : (
            <CommentControl replyHandler={replyHandler}/>
          )}
        </div>
      </article>
      {replies.map((reply) => (
        <Reply key={reply.id} {...reply} currentUser={props.currentUser}/>
      ))}
    </div>
  );
};

export default Comment;
