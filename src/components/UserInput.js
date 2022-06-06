import React from "react";
import classes from "./UserInput.module.css"

const UserInput = (props) => {


    return (
        <div className={classes.card}>
            <img className={classes.avatar} src={props.currentUser.image.png}></img>
            <textarea rows="4" maxLength="150" placeholder="Add a comment..."></textarea>
            <button className={classes.btn}>send</button>
        </div>

    )
}

export default UserInput;