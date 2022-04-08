import React, { useEffect, useState } from "react";
import AddComment from "./AddComment/AddComment";
import axios from "axios";

const CommentSection = (props) => {
  const [newComment, setNewComment] = useState();
  const [comments, setComments] = useState([''])
  // const [comments, setComments] = useState()
    

  const commentSniffer = async () => {
    let text = []
    // let commentSection = await axios.get(`http://localhost:3001/api/${props.videoId}`)
    // let commentSection = await axios.get(`http://localhost:3001/api/1`)
    let commentSection = await axios.get(`http://localhost:3001/api/aWzlQ2N6qqg`)
    for (let i = 0; i < commentSection.data.length; i++){
      // console.log(commentSection.data[i].text)
      text.push(commentSection.data[i].text)
      // setComments([...comments, commentSection.data[i].text], console.log(`comments: ${comments}`))
    }
    // let example = [...text]
    // console.log(`Example: ${example}`)
    console.log(`text: ${text}`)
    // setComments(example,console.log(comments))
    setComments([...text])
    // return (text)
    // console.log(test)
  }

  useEffect(() => {
    commentSniffer()

  }, [])


// useEffect( async () => {
//     let commentsTemp = await commentSniffer();
//     console.log(commentsTemp)
//     setComments([...commentsTemp])
//     console.log(`comments: ${comments}`)
//   }, []);

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
          {/* {comments && comments.map((comment, index) => { */}
          {comments.map((comment, index) => {
            {console.log(`tr/td = ${comment}`)}
           return <tr key={index}><td>{comment}</td></tr>;
          //  {console.log("MAking it here as well")}
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CommentSection;
