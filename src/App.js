import React from 'react';
import './App.css';
import Firstname from './containers/firstname';
import Lastname from './containers/lastname';
import Score from './containers/score';
import Detail from './containers/detail';

function App() {
  return (
    <div className="App">
     <Firstname></Firstname>
     <br></br>
     <Lastname></Lastname>
     <br></br>
     <Score></Score>
     <hr></hr>
     <Detail></Detail>

    </div>
  );
}

export default App;
