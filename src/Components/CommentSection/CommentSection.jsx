import React, { useEffect, useState } from "react";
import AddComment from "./AddComment/AddComment";
import axios from "axios";

const CommentSection = (props) => {
  const [newComment, setNewComment] = useState();
  const [comments, setComments] = useState([''])
    

  const commentSniffer =  () => {
    let text = []
    // let commentSection = await axios.get(`http://localhost:3001/api/${props.videoId}`)
    // let commentSection = axios.get(`http://localhost:3001/api/1`)
    axios.get(`http://localhost:3001/api/aWzlQ2N6qqg`)
    .then((test) => {
      // console.log(test.data)
      // console.log(test)
      for (let i = 0; i < test.data.length; i++){
        // console.log(test.data[i].text)
        text.push(test.data[i].text)
        // setComments([...comments, commentSection.data[i].text], console.log(`comments: ${comments}`))
      }
      // let example = [...text]
      // console.log(`Example: ${example}`)
      // console.log(`text: ${text}`)
      // setMovies(prevMovies => ([...prevMovies, ...result]));
      console.log(text)
      setComments(text =>  ([...text]))
      console.log(comments)
      
      // setComments(example,console.log(comments))
      // console.log(test)
      // console.log(`comments: ${comments}`)
    })
    return (text)
  }

useEffect(
  commentSniffer()
    // let commentsTemp = await commentSniffer();
    // console.log(commentsTemp)
    // setComments([...commentsTemp])
    // console.log(`comments: ${comments}`)
    // console.log(comments)
    );

function handleComments(text){
}

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(comments)
    // commentSniffer()
    // const addComment = {
    //   comment: newComment.comment,
    //   videoId: newComment.videoId
    // };
    // axios.post("http://localhost:3001/api/", addComment).then((response) => {
    //   console.log(response.status);
    //   console.log(response.data.token);
    // });
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
          </tr>
        </thead>
        <tbody>
          {/* {comments.map((comment, index) => {
            return <tr key={index}>{comment.comment}</tr>;
          })} */}
        </tbody>
      </table>
    </div>
  );
};

export default CommentSection;
