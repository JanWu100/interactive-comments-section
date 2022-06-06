import React from "react";
import Comment from "./Comment";
import classes from "./CommentSection.module.css"

const CommentSection = (props)=> {

    const comments = props.data.comments;
    const currentUser = props.data.currentUser;

    return (
        <section className={classes["comment-section"]}>
           {comments.map(comment => <Comment key={comment.id} {...comment} isCurrentUser={currentUser.username === comment.user.username ? true : false}/>)}
            


        </section>


    )
}

export default CommentSection;