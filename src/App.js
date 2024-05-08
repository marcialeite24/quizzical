import './App.css';
import StartGame from './components/StartGame'

export default function App() {
  return (
    <main className='start-game'>
      <img src={require('./images/shape-top.png')} alt='shape-top' className='shape-top'/>
      <StartGame />
      <img src={require('./images/shape-bottom.png')} alt='shape-bottom' className='shape-bottom'/>
    </main>
  );
}