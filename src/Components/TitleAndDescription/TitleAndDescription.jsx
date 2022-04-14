import React, { useState } from 'react';

const TitleAndDescription = (props) => {
    return (  
        <div>
            <h2>{props.title}</h2>
            <p><a >{props.description}</a></p>
        </div>
    );
}
 
export default TitleAndDescription