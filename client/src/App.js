import React from 'react';
import './App.scss';
import MainRoutes from './routes/mainRoutes';
import { Link } from 'react-router-dom';

const App = props => {  
  return (
    <div className="App">
      <Link to='/curriculum'>Curriculum</Link>
      <Link to='/home'>Home</Link>
      <MainRoutes/>
    </div>
  );
};

export default App;
