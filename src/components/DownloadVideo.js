import React from "react";
import { Container } from "react-bootstrap";

const DownloadVideo = ({ id }) => {
  return (
    <div>
      <Container size="sm">
        <iframe
          title="uniqueiframe"
          style={{
            border: "1px solid black",
            fontSize: "30px",
            height: "250px",
            width: "800px",
          }}
          scrolling="no"
          src={`https://loader.to/api/card/?url=https://www.youtube.com/watch?v=${id}`}
        ></iframe>
      </Container>
    </div>
  );
};

export default DownloadVideo;
