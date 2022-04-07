const VideoPlayer = () => {
  return (
    <div>
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src="https://www.youtube.com/embed/aWzlQ2N6qqg"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
