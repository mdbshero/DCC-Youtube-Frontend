import React, { useState } from "react";
import AddComment from "./AddComment/AddComment";
import axios from "axios";

const CommentSection = (props) => {
  const [comment, setComment] = useState([]);

  const handleChange = (e) => {
      e.preventDefault();
    setComment(e.target.value)
    }
    

  const handleSubmit = (e) => {
    e.preventDefault();
    const addComment = {
      comment: comment.comment,
      videoId: comment.videoId
    };
    axios.post("http://localhost:3001/api/comments", addComment).then((response) => {
      console.log(response.status);
      console.log(response.data.token);
    });
  };

  return (
    <div>
      <div>
        <AddComment comment={comment} setComment={setComment} handleSubmit={handleSubmit} handleChange={handleChange} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((comment, index) => {
            return <tr key={index}>{comment.comment}</tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CommentSection;
