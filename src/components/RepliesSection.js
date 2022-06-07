import React from "react";
import Comment from "./Comment";
import classes from "./RepliesSection.module.css";

const RepliesSection = (props) => {
  const replies = props.data;
  const userMe = props.userMe

  if (replies.length !== 0) {
    return (
      <section className={classes["replies-section"]}>
        {replies.map((reply) => (
          <Comment key={reply.id} {...reply} userMe={userMe} />
        ))}
      </section>
    );
  }
};

export default RepliesSection;
