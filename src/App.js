import './App.css';
import './styles/style.css';

import Form from './components/Form';
import Display from './components/Display';
import { useState } from 'react';

function App() {

  const [gifs, setGifs] = useState([]);
  // testing Display component
  // const gifs = [{
  //   src: "https://media1.giphy.com/media/21GCae4djDWtP5soiY/giphy-downsized.gif?cid=c82e1c06dmnde77e8ko00r1sh7wqfjgkecr51jrxwmv1zque&rid=giphy-downsized.gif&ct=g",
  //   alt: 'dog'
  // }];

  return (
    <div className="App">
      <Form />

      <Display gifs={gifs} />
    </div>
  );
}

export default App;
