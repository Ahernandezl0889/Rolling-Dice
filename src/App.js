import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Die from './components/Die'
import RollDice from './components/RollDice';

function App() {
  return (
    <div className="App">
      {/* dice will start facing 5 */}
      {/* we can call as many components that we want */}
     {/* <Die face="five"/>
     <Die face="two"/>
     <Die face="three"/>
     <Die face="six"/> */}

     <RollDice/>
    </div>
  );
}

export default App;
