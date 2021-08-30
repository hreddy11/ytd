import React from "react";
import { Container } from "react-bootstrap";

function DownloadButtonDefault() {
  return (
    <div>
      <Container>
        <h1>Paste URL to get Started ..</h1>
        <p> Check instructions below ..</p>
        <img
          src="https://raw.githubusercontent.com/redianmarku/yt-converter/master/src/gif.gif"
          alt="there is supposed to be an jpg here"
        />
      </Container>
    </div>
  );
}

export default DownloadButtonDefault;
