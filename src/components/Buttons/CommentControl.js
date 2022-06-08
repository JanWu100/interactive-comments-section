import React from "react";
import classes from "./CommentControl.module.css";
import iconReply from "../../assets/images/icon-reply.svg";
import iconEdit from "../../assets/images/icon-edit.svg";
import iconDelete from "../../assets/images/icon-delete.svg";

const CommentControl = (props) => {
  const replyHandler = () => {
    props.replyHandler();
  };
  const deleteComment = () => {
    props.deleteComment();
  };

  if (props.type === "edit") {
    return (
      <button className={`${classes.edit} ${classes.btn}`}>
        <img src={iconEdit} alt=""></img>Edit
      </button>
    );
  } else if (props.type === "delete") {
    return (
      <button
        className={`${classes.delete} ${classes.btn}`}
        onClick={deleteComment}
      >
        <img src={iconDelete} alt=""></img>Delete
      </button>
    );
  } else {
    return (
      <button
        className={`${classes.reply} ${classes.btn}`}
        onClick={replyHandler}
      >
        <img src={iconReply} alt=""></img>Reply
      </button>
    );
  }
};

export default CommentControl;
