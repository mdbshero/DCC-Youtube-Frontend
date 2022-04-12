import React, { useEffect, useState } from "react";
import AddComment from "./AddComment/AddComment";
import AddReply from "./AddReply/AddReply";
import axios from "axios";

const CommentSection = (props) => {
  const [newComment, setNewComment] = useState();
  const [reply, setReply] = useState();
  // const [comments, setComments] = useState([''])
  // const [comments, setComments] = useState()
    

  // const commentSniffer = async () => {
  //   let text = []
  //   let commentSection = await axios.get(`http://localhost:3001/api/${props.videoId}`)
  //   for (let i = 0; i < commentSection.data.length; i++){
  //     text.push(commentSection.data[i].text)
  //   }
  //   console.log(`text: ${text}`)
  //   setComments([...text])
  // }

  
  useEffect(() => {
    props.commentSniffer()
  }, [])


function handleComments(text){
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addComment = {
      text: newComment,
      videoId: props.videoId
    };

    await axios.post("http://localhost:3001/api/", addComment).then((response) => {
      console.log(response.status);
      console.log(response.data.token);
    });

    document.getElementById('commentInputField').value = ''
    props.commentSniffer()
  };

  const handleSubmitReply = async (e, commentId) => {
    e.preventDefault();
    const addReply = {
      text: reply,
    };

    await axios.post(`http://localhost:3001/api/${commentId}/replies`, addReply).then((response) => {
      console.log(response.status);
      console.log(response.data.token);
    });

    document.getElementById('replyInputField').value = ''
    props.commentSniffer()
  };

  return (
    <div>
      <div>
        <AddComment comment={newComment} setNewComment={setNewComment} handleSubmit={handleSubmit} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Comments</th>
            <th>Replies</th>
          </tr>
        </thead>
        <tbody>
          {props.comments.map((comment, index) => {
           return <tr key={index}>
             <td>{comment.text}</td>
             <td> <AddReply handleSubmitReply={handleSubmitReply} setReply={setReply} index={comment.key} /> </td>
             </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CommentSection;
