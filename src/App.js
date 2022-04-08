import react, { useState, useEffect } from "react";

import axios from "axios";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer"
import SearchBar from "./Components/SearchBar/SearchBar"





function App() {
// const [query, setQuery] = useState("");
const [videoID, setVideoID] = useState("")

function parseSearch(text){
  example(text)
//  let videoSearch = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${query}&key=${KEY}`)
}
const example = async (text) => {
  // console.log(text)
  const KEY = process.env.REACT_APP_KEY
  console.log(KEY)
  let videoSearch = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${text}&key=${KEY}`)
  
  console.log(videoSearch.data)
  console.log(videoSearch.data.items[0].id.videoId)
}




  return (
    <div>
      <SearchBar parseSearch={parseSearch}/>
      <VideoPlayer />
    </div>
  );
}

export default App;
