import react, { useState, useEffect } from "react";

import axios from "axios";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import SearchBar from "./Components/SearchBar/SearchBar";
import RelatedVideos from "./Components/RelatedVideos/RelatedVideos";
import CommentSection from "./Components/CommentSection/CommentSection";
import TitleAndDescription from "./Components/TitleAndDescription/TitleAndDescription";

function App() {
  const [videoID, setVideoID] = useState(
    async (text = "Doctor Strange in the Multiverse of Madness") => {
      const KEY = process.env.REACT_APP_KEY;
      let videoSearch = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=${text}&key=${KEY}&part=snippet`
      );
      setVideoID(videoSearch.data.items[0].id.videoId);
      relatedVideos(videoSearch.data.items[0].id.videoId);
      commentSniffer(videoSearch.data.items[0].id.videoId);
      let pullSnippet = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoSearch.data.items[0].id.videoId}&key=${KEY}&part=snippet`
      )
      console.log(pullSnippet.data.items[0].snippet.description)
      setTitle(pullSnippet.data.items[0].snippet.title)
      setDescription(pullSnippet.data.items[0].snippet.description)
    }
  );
  const [relatedVideoID, setRelatedVideoID] = useState([]);
  // const [comments, setComments] = useState([''])
  const [comments, setComments] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')

  ///WHEN YOU SEARCH FOR "DAFT" or "DAFT PUNK" it will return a channel first, which causes it to break.
  //Add proper functionality to prevent this
  const parseSearch = async (text) => {
    const KEY = process.env.REACT_APP_KEY;
    let videoSearch = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${text}&key=${KEY}`
    );
    setVideoID(videoSearch.data.items[0].id.videoId);
    relatedVideos(videoSearch.data.items[0].id.videoId);
    commentSniffer(videoSearch.data.items[0].id.videoId);
    let pullSnippet = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoSearch.data.items[0].id.videoId}&key=${KEY}&part=snippet`
    )
    console.log(pullSnippet.data.items[0].snippet.description)
    setTitle(pullSnippet.data.items[0].snippet.title)
    setDescription(pullSnippet.data.items[0].snippet.description)
  };


  const commentSniffer = async (searchString = videoID) => {
    let text = [];
    // let objComments = []
    let commentSection = await axios.get(
      `http://localhost:3001/api/${searchString}`
    );
    for (let i = 0; i < commentSection.data.length; i++) {
      text.push({
        text: commentSection.data[i].text,
        key: commentSection.data[i]._id,
        videoId: commentSection.data[i].videoId,
        replies: commentSection.data[i].replies.map((entry) => {
          return {
            text: entry.text,
            likes: entry.likes,
            dislikes: entry.dislikes,
            id: entry._id,
          };
        }),
        likes: commentSection.data[i].likes,
        dislikes: commentSection.data[i].dislikes,
      });
      // objComments.push(commentSection.data[i]._id)
    }
    // console.log(`text: ${JSON.stringify(text)}`)
    setComments([...text]);
    // setCommentList([...objComments])
    // console.log(objComments)
  };

  //WHY ARE SET STATE VARIABLES SO SLOW
  const relatedVideos = async (searchString = videoID) => {
    let test = [];
    const KEY = process.env.REACT_APP_KEY;
    let relatedVideo = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${searchString}&type=video&key=${KEY}`
    );
    // console.log(relatedVideo)
    for (let i = 0; i < relatedVideo.data.items.length; i++) {
      test.push(relatedVideo.data.items[i].id.videoId);
    }
    setRelatedVideoID([...test]);
  };

  return (
    <div className="container-fluid">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <div class="navbar-brand">FakeTube</div>
            <div>
              <SearchBar parseSearch={parseSearch} />
            </div>
            </div>
          </nav>
      <div className="row">
        <div className="col"></div>
        <div className="col mt-5">
          <VideoPlayer videoId={videoID} />
        </div>
        <div className="col">
          <RelatedVideos
            relatedVideoID={relatedVideoID}
            videoIdSearch={parseSearch}
          />
        </div>
      </div>
      <div>
        <TitleAndDescription title={title} description={description}/>
      </div>
      <div className="row">
        <div className="col">
          <CommentSection
            videoId={videoID}
            commentSniffer={commentSniffer}
            comments={comments}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
