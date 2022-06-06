import React from "react";
import Comment from "./Comment";
import classes from "./CommentSection.module.css"
import UserInput from "./UserInput";

const CommentSection = (props)=> {

    const comments = props.data.comments;

    return (
        <section className={classes["comment-section"]}>
           {comments.map(comment => <Comment key={comment.id} {...comment} currentUser={props.data.currentUser}/>)}
            

        <UserInput {...props.data}/>
        </section>


    )
}

export default CommentSection;