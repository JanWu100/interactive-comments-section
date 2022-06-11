import React from "react";
import Comment from "./Comment";
import classes from "./RepliesSection.module.css";

const RepliesSection = (props) => {
  const replies = props.data;

  const deleteComment = (id) => {
    props.deleteComment(id);
  };

  if (replies.length !== 0) {
    return (
      <section className={classes["replies-section"]}>
        {replies.map((reply) => (
          <Comment
            key={reply.id}
            {...reply}
            deleteComment={deleteComment}
          />
        ))}
      </section>
    );
  }
};

export default RepliesSection;
