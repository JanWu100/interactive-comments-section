import React from "react";
import Comment from "./Comment";
import classes from "./CommentSection.module.css";
import UserInput from "./UserInput";

const CommentSection = (props) => {
  const comments = props.data.comments;
  const userMe = props.userMe

  return (
    <section className={classes["comment-section"]}>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          {...comment}
          userMe={userMe}
        />

      ))}
      <UserInput {...props.data} userMe={userMe}/>
    </section>
  );
};

export default CommentSection;
