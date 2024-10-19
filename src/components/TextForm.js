import React, { useState } from "react";

export default function TextForm(props) {
  //enable dark mode
  

  

  

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };


  const handleOnChange = (event) => {
    setText(event.target.value);
   
  };
  const handleclear = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };
  const [text, setText] = useState("");

  const handleExtraSpaces = () => { 
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  }

  


  const handleCopy = () => {
    var text = document.getElementById("myText");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  };
  
 

  

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
       
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}
            id="myText"
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleLowClick}

        >
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleclear}>
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        {/* <button
          className="btn btn-primary mx-2"
          onClick={() => setText(text.replace(/\s+/g, " "))}
        >
          Remove Extra Spaces
        </button> */}
        <button
          className="btn btn-primary mx-2"
          onClick={() => setText(text.replace(/\n/g, " "))}
        >
          Remove New Lines
        </button>
    
        <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>
          Copy Text
        </button>
      
   <div className="container my-3" style={{ Color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>

        <p>{0.008 * text.split(" ").length} Minutes read</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
      </div>
    </>
  );
}
