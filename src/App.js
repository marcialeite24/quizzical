import './App.css';
import StartGame from './components/StartGame'
import Questions from './components/Questions'
import React from 'react';

export default function App() {
  const [startGame, setStartGame] = React.useState(false)

  function start() {
    if(startGame) {
      setStartGame(false)
    } else {
      setStartGame(true)
    }
  }

  return (
    <main className='start-game'>
      <img src={require('./images/shape-top.png')} alt='shape-top' className='shape-top'/>
      {!startGame && <StartGame start={start} />}
      {startGame && <Questions />}
      <img src={require('./images/shape-bottom.png')} alt='shape-bottom' className='shape-bottom'/>
    </main>
  );
}