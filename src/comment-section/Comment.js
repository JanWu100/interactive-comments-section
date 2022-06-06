import React from "react";
import classes from "./Comment.module.css"
import image from "../assets/images/avatars/image-amyrobson.png"
import arrowImage from "../assets/images/icon-reply.svg"

const Comment = () => {
  return (
    <article className={classes.comment}>
       
      <div className={classes["author-wrapper"]}>
      <img className={classes.avatar} src={image}></img>
        <p className={classes.author}>amyrobson</p>
        <p className={classes.date}>1 month ago</p>
      </div>
      
        <p className={classes["comment-body"]}>
          Impressive! Though it seems the drag feature could be improved. But
          overall it looks incredible. You've nailed the design and the
          responsiveness at various breakpoints works really well.
        </p>
     
      <div className={classes.footer}>
          <div className={classes.quantity}>
              <button>+</button>
              <input type="number" value="22" min="0" step="1" max="100" disabled></input>
              <button>-</button>
          </div>
          <div className={classes.reply}><img src={arrowImage} alt=""></img>Reply</div>
      </div>
    </article>
  );
};

export default Comment;
