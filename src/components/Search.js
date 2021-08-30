import React, { useState, useEffect } from 'react';
import { Container, Row  } from 'react-bootstrap';

const Search=() => {
    const [videoUrl, setVideoUrl] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {
        const id = videoUrl;
        setId(id);
    }, [videoUrl])

    return (
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
    )
}

export default Search;
