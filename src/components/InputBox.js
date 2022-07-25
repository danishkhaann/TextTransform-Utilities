import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { decode as base64_decode, encode as base64_encode } from "base-64";

function InputBox() {
  const [text, setText] = useState("");

  const upperCase = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const lowerCase = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const clearText = () => {
    setText("");
  };
  const copiedText = () => {
    setText("Done Copying!!");
  };

  const encodeText = () => {
    let encoded = base64_encode(text);
    setText(encoded);
  };

  const decodeText = () => {
    let decoded = base64_decode(text);
    setText(decoded);
  };

  return (
    <>
      <div className="container">
        <h1 className="p-2">Enter Your Text</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            rows="8"
            placeholder="Enter Text To Transform"
            onChange={handleOnChange}
          ></textarea>
        </div>

        <button type="button" className="btn btn-primary" onClick={upperCase}>
          UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={lowerCase}
        >
          LowerCase
        </button>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={clearText}
        >
          Clear
        </button>
        <CopyToClipboard text={text}>
          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={copiedText}
          >
            Copy To Clipboard
          </button>
        </CopyToClipboard>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={encodeText}
        >
          Encode Text
        </button>
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={decodeText}
        >
          Decode Text
        </button>
      </div>
      <div className="container">
        <h1>Text Summary</h1>
        <p>{text.length} Number of Letters</p>
        <p>{text.split(" ").length} Number of Words</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
      </div>
    </>
  );
}

export default InputBox;
