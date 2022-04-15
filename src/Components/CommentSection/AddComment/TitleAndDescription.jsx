import React, { useState } from 'react';

const TitleAndDescription = (props) => {
    return (  
        <div className='container'>
            <h2><u>{props.title}</u></h2>
            <p><a >{props.description}</a></p>
        </div>
    );
}
 
export default TitleAndDescription