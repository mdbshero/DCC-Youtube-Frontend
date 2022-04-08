import React, { useState } from 'react';

const RelatedVideos = (props) => {    
        // src="https://img.youtube.com/vi/6qiMlcAnurQ/default.jpg"
    return (  
        <div>
        <iframe id="ytplayer" type="text/html"  src={`https://img.youtube.com/vi/${props.relatedVideoID}/default.jpg`} frameBorder="0"/>
        <iframe id="ytplayer" type="text/html"  src={`https://img.youtube.com/vi/${props.relatedVideoID}/default.jpg`} frameBorder="0"/>
        <iframe id="ytplayer" type="text/html"  src={`https://img.youtube.com/vi/${props.relatedVideoID}/default.jpg`} frameBorder="0"/>
        <iframe id="ytplayer" type="text/html"  src={`https://img.youtube.com/vi/${props.relatedVideoID}/default.jpg`} frameBorder="0"/>
        <iframe id="ytplayer" type="text/html"  src={`https://img.youtube.com/vi/${props.relatedVideoID}/default.jpg`} frameBorder="0"/>
        </div>


        
    );
}
 
export default RelatedVideos;