import React, { useState } from "react";
import Qrbar from "./Qrbar";
import "./style.css";
function Qr() {
  const [isEntered, setisEntered] = useState(false);
  const [url, seturl] = useState("");
  const [input, setinput] = useState("");
  const generateQR = () => {
    setisEntered(true);
    seturl(
      `https://api.qrserver.com/v1/create-qr-code/?data=${input}&amp;size=100x100`
    );
  };
  return (
    <div className="container">
      <h1>QR Code Generator</h1>
      <div className="inputbox">
        <label htmlFor="imgurl" className="form-label">
          Enter url:
        </label>
        <input
          className="form-control"
          id="imgurl"
          placeholder="www.url.com"
          type="text"
          value={input}
          onChange={(e) => {
            setinput(e.target.value);
          }}
        />
        <button
          type="button"
          className="btn btn-primary"
          id="submitbtn"
          onClick={generateQR}
        >
          Submit
        </button>
      </div>
      {isEntered && <Qrbar src={url} />}
    </div>
  );
}
export default Qr;
