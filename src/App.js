import './App.css';
import './styles/style.css';

import Form from './components/Form';
import Display from './components/Display';
import { useState } from 'react';

function App() {

  const [gifs, setGifs] = useState([]);

  return (
    <div className="App">
      <Form setGifs={setGifs} />

      <Display gifs={gifs} />
    </div>
  );
}

export default App;
