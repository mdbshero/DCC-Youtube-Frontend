import react, { useState, useEffect } from "react";
import axios from "axios";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer"
import SearchBar from "./Components/SearchBar/SearchBar"





function App() {
const [query, setQuery] = useState("");
const [videoID, setVideoID] = useState("")






  return (
    <div>
      <SearchBar />
      <VideoPlayer />
    </div>
  );
}

export default App;
