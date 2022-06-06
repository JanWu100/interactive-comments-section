import React from "react";
import classes from "./CommentControl.module.css"
import iconReply from "../../assets/images/icon-reply.svg"
import iconEdit from "../../assets/images/icon-edit.svg"
import iconDelete from "../../assets/images/icon-delete.svg"


const CommentControl = (props) => {
    if (props.type === "edit") {
        return (
            <button className={classes.edit}>
                <img src={iconEdit} alt=""></img>Edit
              </button>
        )      
    } else if (props.type === "delete") {
        return (
            <button className={classes.delete}>
                <img src={iconDelete} alt=""></img>Delete
              </button>
        )  
    } else {
        return (
            <button className={classes.reply}>
                <img src={iconReply} alt=""></img>Reply
              </button>
        )  
    }
  


}

export default CommentControl;