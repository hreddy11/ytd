import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row  } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import NavBar from './components/NavBar';
// import Search from './components/Search';
import DownloadVideo from './components/DownloadVideo';
import DownloadButtonDefault from './components/DownloadButtonDefault';
import { div } from 'prelude-ls';



const App = () =>{

  const [videoUrl, setVideoUrl] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
      const id = videoUrl.replace("https://www.youtube.com/watch?v=", "");
      setId(id);
      console.log(id);
  }, [videoUrl]);

  return (
    <div className="App">
      <NavBar/>

      {/* <Search/> */}
      <Container>
        <Row>
            <form onSubmit={(e)=>e.preventDefault()}>
                <input 
                onChange={ (e) => setVideoUrl(e.target.value) }
                value= {videoUrl}
                type="text" 
                placeholder="Paste Youtube URL here..."/>
            </form>
        </Row>
    </Container>

    {
      videoUrl === "" ? (
        <DownloadButtonDefault />
      ) : (
        <div> 
          {
            videoUrl.startsWith("https://www.youtube.com/watch?v=") ? (
              <DownloadVideo id={ id } />
            ) :
            <h1> Invalid Youtube Video</h1>
          }
          
        </div>
      )
    }
    <br/>
    <div>
      <h3> Feel free to edit janky frontend !! </h3>
    </div>
    </div>
  );
}

export default App;
