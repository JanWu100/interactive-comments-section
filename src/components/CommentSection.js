import React from "react";
import Comment from "./Comment";
import classes from "./CommentSection.module.css"

const CommentSection = (props)=> {

    const comments = props.data.comments;

    return (
        <section className={classes["comment-section"]}>
           {comments.map(comment => <Comment key={comment.id} {...comment} currentUser={props.data.currentUser}/>)}
            


        </section>


    )
}

export default CommentSection;