import react, { useState, useEffect } from "react";
import axios from "axios";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer"





function App() {
const [query, setQuery] = useState("");






  return (
    <div>
      <VideoPlayer />
    </div>
  );
}

export default App;
