import React, { useState } from 'react';

const TitleAndDescription = (props) => {

    const parseString = (text = props.description) => {
    const textReg = /(\b(https:|http:)\/\/\S*|\S*(\.com|\.net|\.ly|\.io|\.org)\S*)/g
    const testArray = [...props.description.matchAll(/(\b(https:|http:)\/\/\S*|\S*(\.com|\.net|\.ly|\.io|\.org)\S*)/g)]
    // console.log(regTest.toString(props.description))
    
    let testThis = testArray.map(example => {
        return <a href={example[0]}>{example[0]}</a>
    })

    let testStart = text.replace(textReg, function (x) {
        // console.log(x)
        return `<a href=${x}>${x}</a>`
        // console.log(x)
        return <a href={`${x}`}>{`${x}`}</a>
    })
    // console.log(JSON.stringify(testArray))
    // return(props.description)
    // console.log(JSON.stringify(testStart))
    try{
        document.getElementById('descriptionBox').innerHTML = testStart
        console.log("SUccess?")
    }catch (err){
        console.log('page not fully loaded yet')
    }
    // return (
    // <p>{testStart}</p>
    // )
    }

    return (  
        <div>
            <h2>{props.title}</h2>
            <p id="descriptionBox"></p>
            {parseString()}
        </div>
    );
}
 
export default TitleAndDescription