import react, { useState, useEffect } from "react";

import axios from "axios";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer"
import SearchBar from "./Components/SearchBar/SearchBar"
import RelatedVideos from "./Components/RelatedVideos/RelatedVideos";
import CommentSection from "./Components/CommentSection/CommentSection_bkup";





function App() {
const [videoID, setVideoID] = useState(async (text='Doctor Strange in the Multiverse of Madness') => {
  const KEY = process.env.REACT_APP_KEY
  let videoSearch = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${text}&key=${KEY}`)
  setVideoID(videoSearch.data.items[0].id.videoId)
  relatedVideos(videoSearch.data.items[0].id.videoId)})
const [relatedVideoID, setRelatedVideoID] = useState([])
const [comments, setComments] = useState([''])

///WHEN YOU SEARCH FOR "DAFT" or "DAFT PUNK" it will return a channel first, which causes it to break. 
//Add proper functionality to prevent this
const parseSearch = async (text) => {
  const KEY = process.env.REACT_APP_KEY
  let videoSearch = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${text}&key=${KEY}`)
  setVideoID(videoSearch.data.items[0].id.videoId)
  relatedVideos(videoSearch.data.items[0].id.videoId)
  commentSniffer(videoSearch.data.items[0].id.videoId)
}

const videoIdSearch = async (text) => {
  const KEY = process.env.REACT_APP_KEY
  let videoSearch = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${text}&key=${KEY}`)
  setVideoID(videoSearch.data.items[0].id.videoId)
  relatedVideos(videoSearch.data.items[0].id.videoId)
  commentSniffer(videoSearch.data.items[0].id.videoId)
}

const commentSniffer = async (searchString = videoID) => {
  let text = []
  let commentSection = await axios.get(`http://localhost:3001/api/${searchString}`)
  for (let i = 0; i < commentSection.data.length; i++){
    text.push(commentSection.data[i].text)
  }
  // console.log(`text: ${text}`) 
  setComments([...text])
}


//WHY ARE SET STATE VARIABLES SO SLOW
const relatedVideos = async (searchString = videoID) => {
  // setRelatedVideoID([])
  let test = []
  const KEY = process.env.REACT_APP_KEY
  // console.log(searchString)
  let relatedVideo = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${searchString}&type=video&key=${KEY}`)
  // console.log(relatedVideo)
  for (let i = 0; i < (relatedVideo.data.items).length; i++){
    // console.log(relatedVideo.data.items[i].id.videoId)
    test.push(relatedVideo.data.items[i].id.videoId)
  }
  // console.log(test)
  // console.log(`Hullabloo : ${relatedVideoID}`)
  setRelatedVideoID([...test])
  // console.log(relatedVideoID)
}


  return (
    <div>
      <SearchBar parseSearch={parseSearch}/>
      <VideoPlayer videoId={videoID}/>
      <RelatedVideos relatedVideoID={relatedVideoID} videoIdSearch={videoIdSearch}/>
      <CommentSection videoId={videoID} commentSniffer={commentSniffer} comments={comments}/>
    </div>
  );
}

export default App;
