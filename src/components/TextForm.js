import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };

  const handleDownClick = () => {
    // console.log("Uppercase was clicked")
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };

  const handleTextClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleOnChange = (event) => {
    //   console.log("On Change")
    setText(event.target.value);
  };

  const handleCopy = (event) => {
    //   console.log("Copied Text")
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied!", "success");
  };

  const [text, setText] = useState("");
  // setText("New Text");

  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div
          className="form-group"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black"
            }
          
          }
          />
        </div>
        <button className="btn btn-primary my-2" onClick={handleUpClick}>
          Change To UpperCase
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={handleDownClick}>
          Change To Lowercase
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={handleTextClear}>
          Clear Text
        </button>

        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} Characters
        </p>
        <p>It will take {text.length * 0.008} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Some Text"}</p>
      </div>
    </>
  );
}
