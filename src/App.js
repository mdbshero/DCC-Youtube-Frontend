import react, { useState, useEffect } from "react";

import axios from "axios";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer"
import SearchBar from "./Components/SearchBar/SearchBar"





function App() {
const [videoID, setVideoID] = useState("aWzlQ2N6qqg")

function parseSearch(text){
  try{
    example(text)
  }catch(error){
    console.log(`Ran into error: ${error}`)
  }
}
const example = async (text) => {
  const KEY = process.env.REACT_APP_KEY
  let videoSearch = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${text}&key=${KEY}`)
  setVideoID(videoSearch.data.items[0].id.videoId)
}


  return (
    <div>
      <SearchBar parseSearch={parseSearch}/>
      <VideoPlayer videoId={videoID}/>
    </div>
  );
}

export default App;
