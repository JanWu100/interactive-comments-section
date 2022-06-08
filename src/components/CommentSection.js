import React from "react";
import Comment from "./Comment";
import classes from "./CommentSection.module.css";
import UserInput from "./UserInput";

const CommentSection = (props) => {
  const comments = props.data.comments;
  const userMe = props.userMe;

  const addReply = (value) => {
    props.addReply(value);
  };
  const addReplyToComment = (value, id) => {
    props.addReplyToComment(value, id);
  };

  const deleteComment = (id) => {
    props.deleteComment(id);
  };
  const deleteReply = (id) => {
    props.deleteReply(id);
  };

  return (
    <section className={classes["comment-section"]}>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          {...comment}
          userMe={userMe}
          addReply={addReplyToComment}
          deleteComment={deleteComment}
          deleteReply={deleteReply}
        />
      ))}
      <UserInput {...props.data} userMe={userMe} addReply={addReply} />
    </section>
  );
};

export default CommentSection;
