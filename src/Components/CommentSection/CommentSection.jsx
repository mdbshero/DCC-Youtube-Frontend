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


  const handleLikes = async (event,comment) => {
    event.preventDefault()
    console.log(JSON.stringify(comment))
      let newLikes = {text:comment.text,
        videoId:comment.videoId,
        likes:comment.likes += 1}

      await axios.put(`http://localhost:3001/api/${comment.key}`, newLikes).then((response) => {
        console.log(response.status);
        console.log(response.data.token);
        props.commentSniffer()
      });


  }

  const handleDislikes = async (event,comment) => {
    event.preventDefault()
    console.log("TEST TEST TEST")
    let newDislikes = {text:comment.text,
      videoId:comment.videoId,
      dislikes:comment.dislikes += 1}
      console.log(JSON.stringify(newDislikes))
    await axios.put(`http://localhost:3001/api/${comment.key}`, newDislikes).then((response) => {
      console.log(response.status);
      console.log(response.data.token);
      props.commentSniffer()
    });
  }

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
            <th>Add replies</th>
          </tr>
        </thead>
        <tbody>
          {props.comments.map((comment, index) => {
           return <tr key={index}>
             <td>{comment.text}     <button name={`likebutton${index}`} onClick={(event) =>handleLikes(event, comment)}>/\</button><label htmlFor={`likebutton${index}`}>{comment.likes}</label><button name={`dislikebutton${index}`} onClick={(event) => handleDislikes(event,comment)}>\/</button><label htmlFor={`dislikebutton${index}`}>{comment.dislikes}</label></td>
             {/* {console.log(comment)} */}
             <td>{comment.replies}</td>
             <td> <AddReply handleSubmitReply={handleSubmitReply} setReply={setReply} index={comment.key} /> </td>
             </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CommentSection;
