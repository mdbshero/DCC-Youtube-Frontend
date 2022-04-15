import React, { useState } from "react";

const TitleAndDescription = (props) => {
  const parseString = (text = props.description) => {
    const textReg =
      /(\b(https:|http:)\/\/\S*|\S*(\.com|\.net|\.ly|\.io|\.org)\S*)/g;
    const testArray = [
      ...props.description.matchAll(
        /(\b(https:|http:)\/\/\S*|\S*(\.com|\.net|\.ly|\.io|\.org)\S*)/g
      ),
    ];

    let testThis = testArray.map((example) => {
      return <a href={example[0]}>{example[0]}</a>;
    });

    let testStart = text.replace(textReg, function (x) {
      return `<a href=${x} target="_blank">${x}</a>`;
      return <a href={`${x}`}>{`${x}`}</a>;
    });
    try {
      document.getElementById("descriptionBox").innerHTML = testStart;
      console.log("SUccess?");
    } catch (err) {
      console.log("page not fully loaded yet");
    }
  };

  return (
    <div className="container border border-3">
      <h2>
        <u>{props.title}</u>
      </h2>
      <p id="descriptionBox"></p>
      {parseString()}
    </div>
  );
};

export default TitleAndDescription;
