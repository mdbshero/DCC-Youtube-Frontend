import React, { useState } from 'react';

const RelatedVideos = (props) => {    
        // src="https://img.youtube.com/vi/6qiMlcAnurQ/default.jpg"
        
        function handleClick(event,relatedVid){
            event.preventDefault();
            props.videoIdSearch(relatedVid)
            console.log("hello")
        }


        //Occasionally the first related video will display as a blank default image due to the video being "no longer available" 
        // console.log(`Related Videos: ${props.relatedVideoID}`)
    return (  
        <div>
            { props.relatedVideoID.map((relatedVid) => {
                try{
                return <button type="button" onClick={(e) => handleClick(e, relatedVid)}><img id="ytplayer" SameSite='None' type="text/html"  src={`https://img.youtube.com/vi/${relatedVid}/default.jpg`} alt="./Sad.png" frameBorder="0"/></button>
                }catch(error){
                    
                }
            
            
            })




            }
            {/* <button onClick={(e) => {handleClick(e)}}><iframe id="ytplayer" type="text/html"  src={`https://img.youtube.com/vi/${props.relatedVideoID[0]}/default.jpg`} alt="./Sad.png" frameBorder="0"/></button>
            <button onClick={(e) => {handleClick(e)}}><iframe id="ytplayer" type="text/html"  src={`https://img.youtube.com/vi/${props.relatedVideoID[1]}/default.jpg`} alt="./Sad.png" frameBorder="0"/></button>
            <button onClick={(e) => {handleClick(e)}}><iframe id="ytplayer" type="text/html"  src={`https://img.youtube.com/vi/${props.relatedVideoID[2]}/default.jpg`} alt="./Sad.png" frameBorder="0"/></button>
            <button onClick={(e) => {handleClick(e)}}><iframe id="ytplayer" type="text/html"  src={`https://img.youtube.com/vi/${props.relatedVideoID[3]}/default.jpg`} alt="./Sad.png" frameBorder="0"/></button>
            <button onClick={(e) => {handleClick(e)}}><iframe id="ytplayer" type="text/html"  src={`https://img.youtube.com/vi/${props.relatedVideoID[4]}/default.jpg`} alt="./Sad.png" frameBorder="0"/></button> */}
        
        {/* <iframe id="ytplayer" type="text/html"  src={`https://img.youtube.com/vi/${props.relatedVideoID[1]}/default.jpg`} frameBorder="0"/>
        <iframe id="ytplayer" type="text/html"  src={`https://img.youtube.com/vi/${props.relatedVideoID[2]}/default.jpg`} frameBorder="0"/>
        <iframe id="ytplayer" type="text/html"  src={`https://img.youtube.com/vi/${props.relatedVideoID[3]}/default.jpg`} frameBorder="0"/>
        <iframe id="ytplayer" type="text/html"  src={`https://img.youtube.com/vi/${props.relatedVideoID[4]}/default.jpg`} frameBorder="0"/> */}
        </div>


        
    );
}
 
export default RelatedVideos;