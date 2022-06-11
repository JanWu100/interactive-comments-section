import "./App.css";
import React, { useState } from "react";
import CommentSection from "./components/CommentSection";
import DUMMY_DATA from "./assets/data.json";
import UserContext from "./components/context/userContext";

function App() {
  const [data, setData] = useState(DUMMY_DATA);
  const [comments, setComments] = useState(data.comments);

  const addReply = (value) => {
    const updatedValue = value;

    setData((prevState) => ({
      ...prevState,
      comments: [...prevState.comments, updatedValue],
    }));
    setComments(data.comments);
  };

  const addReplyToComment = (value, id) => {
    const indexOfComment = data.comments.findIndex((x) => x.id === id);
    const replyingToWho = comments[indexOfComment].user.username;

    const updatedValue = { ...value, replyingTo: replyingToWho };
    setComments(
      (comments[indexOfComment].replies = [
        ...comments[indexOfComment].replies,
        updatedValue,
      ])
    );
  };

  const deleteComment = (id) => {
    let indexOfComment = data.comments.findIndex((x) => x.id === id);
    setComments([
      ...comments.slice(0, indexOfComment),
      ...comments.slice(indexOfComment + 1, comments.length),
    ]);
  };
  const deleteReply = (id) => {
    let foundIndex = -1;
    let indexOfComment;

    for (let i = 0; i < data.comments.length; i++) {
      let tempData = data.comments[i].replies.findIndex((x) => x.id === id);
      if (tempData !== -1) {
        foundIndex = tempData;
        indexOfComment = i;
      }
    }
    setComments(
      (comments[indexOfComment].replies = [
        ...comments[indexOfComment].replies.slice(0, foundIndex),
        ...comments[indexOfComment].replies.slice(
          foundIndex + 1,
          comments[indexOfComment].replies.length
        ),
      ])
    );
  };


  return (
    <UserContext.Provider value={
      {
        "image": data.currentUser.image,
        "username": data.currentUser.username
      }
    }>
      <CommentSection
        data={data}
        addReply={addReply}
        addReplyToComment={addReplyToComment}
        deleteComment={deleteComment}
        deleteReply={deleteReply}
      />
    </UserContext.Provider>
  );
}

export default App;
