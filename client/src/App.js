import React, { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';

const App = props => {

  const [test, setTest] = useState('');

  const api = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${api}/test`)
      .then(res => setTest(res.data))
  }, [api])
  
  return (
    <div className="App">
      {test}
    </div>
  );
}

export default App;
