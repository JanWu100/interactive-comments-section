import React, { useState } from "react";
import classes from "./Comment.module.css";
import CommentControl from "./Buttons/CommentControl";
import RepliesSection from "./RepliesSection";
import UserInput from "./UserInput";

const Comment = (props) => {
  const isCurrentUser =
    props.userMe.username === props.user.username ? true : false;
  const replies = props.replies;
  const userMe = props.userMe;

  const [isReplying, setIsReplying] = useState(false);

  const replyHandler = () => {
    setIsReplying(true);
  };

  const addReply = (value) => {
    let id = props.id;
    setIsReplying(false);
    props.addReply(value, id);
  };
  const deleteComment = () => {
    let id = props.id;
    props.deleteComment(id);
  };

  const deleteReply = (id) => {
    props.deleteReply(id);
  };

  const renderReplyInput = () => {
    if (isReplying === true) {
      return (
        <UserInput
          {...props}
          userMe={userMe}
          onReplyHandler={onReplyingHandler}
          addReply={addReply}
        />
      );
    }
  };
  const onReplyingHandler = () => {};

  const setControllers = () => {
    if (isCurrentUser) {
      return (
        <>
          <CommentControl type="delete" deleteComment={deleteComment} />{" "}
          <CommentControl type="edit" />
        </>
      );
    } else {
      return <CommentControl replyHandler={replyHandler} />;
    }
  };

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

        <p className={classes["comment-body"]}>
          {props.replyingTo ? (
            <span className={classes.link}>{"@" + props.replyingTo + " "}</span>
          ) : (
            ""
          )}
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

        <div className={classes.control}>{setControllers()}</div>
      </article>
      {renderReplyInput()}
      {replies && (
        <RepliesSection
          data={replies}
          userMe={userMe}
          deleteComment={deleteReply}
        />
      )}
    </div>
  );
};

export default Comment;

// {replies.map((reply) => (
//   <Reply key={reply.id} {...reply} currentUser={props.currentUser} />
// ))}
