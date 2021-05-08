import './App.css';
import './styles/style.css';

import Form from './components/Form';
import Display from './components/Display';
import Header from './components/Header';
import { useState } from 'react';

function App() {

  const [gifs, setGifs] = useState([]);

  return (
    <div className="App">

      <Header />

      <Form setGifs={setGifs} />

      <Display gifs={gifs} />
    </div>
  );
}

export default App;
