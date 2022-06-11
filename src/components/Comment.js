import React, { useState, useContext } from "react";
import UserContext from "./context/userContext";
import classes from "./Comment.module.css";
import CommentControl from "./Buttons/CommentControl";
import RepliesSection from "./RepliesSection";
import UserInput from "./UserInput";

const Comment = ({
  userMe,
  content,
  replyingTo,
  id,
  user,
  replies,
  addReply,
  deleteComment,
  deleteReply,
  createdAt,
  score,
}) => {
  const currentUser = useContext(UserContext);

  const isCurrentUser = currentUser.username === user.username ? true : false;

  const [isReplying, setIsReplying] = useState(false);

  const replyHandler = () => {
    setIsReplying(true);
  };

  const renderReplyInput = () => {
    if (isReplying === true) {
      return (
        <UserInput
          addReply={(value) => {
            setIsReplying(false);
            addReply(value, id);
          }}
        />
      );
    }
  };

  const setControllers = () => {
    if (isCurrentUser) {
      return (
        <>
          <CommentControl
            type="delete"
            deleteComment={() => {
              deleteComment(id);
            }}
          />{" "}
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
          <img className={classes.avatar} src={user.image.png} alt=""></img>
          <p className={classes.author}>{user.username}</p>
          {isCurrentUser ? <span className={classes.badge}>you</span> : ""}
          <p className={classes.date}>{createdAt}</p>
        </div>

        <p className={classes["comment-body"]}>
          {replyingTo ? (
            <span className={classes.link}>{"@" + replyingTo + " "}</span>
          ) : (
            ""
          )}
          {content}
        </p>

        <div className={classes.quantity}>
          <button className={classes.btn}>+</button>
          <input
            type="number"
            value={score}
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
          deleteComment={(id) => {
            deleteReply(id);
          }}
        />
      )}
    </div>
  );
};

export default Comment;
