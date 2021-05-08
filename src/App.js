import './App.css';
import './styles/style.css';

import Form from './components/Form';
import Display from './components/Display';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import { getGifs } from './gitGifs';


function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    displayRandomGifs(setGifs);
  }, [])


  return (
    <div className="App">

      <Header />

      <Form setGifs={setGifs} />

      <Display gifs={gifs} />

    </div>
  );
}

export default App;

const displayRandomGifs = (setGifs) => {
  const defaultGifsURL = 'https://api.giphy.com/v1/gifs/search?api_key=s94Y5aXMRGvgV909X5F0RCggf5xpzkMB&q=random&limit=25&offset=0&rating=g&lang=en';
  getGifs(defaultGifsURL)
    .then(gifs => {
      setGifs(gifs);
    })
}