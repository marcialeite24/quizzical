import './App.css';
import StartGame from './components/StartGame'
import Questions from './components/Questions'
import React from 'react'

export default function App() {
  const [startGame, setStartGame] = React.useState(false)
  const [formData, setFormData] = React.useState(
    {
      category: "",
      difficulty: ""
    }
  )

  function start() {
    if(startGame) {
      setStartGame(false)
    } else {
      setStartGame(true)
    }
  }

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <main className='start-game'>
      <img src={require('./images/shape-top.png')} alt='shape-top' className='shape-top'/>
      {!startGame && <StartGame start={start} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>}
      {startGame && <Questions category={formData.category} difficulty={formData.difficulty}/>}
      <img src={require('./images/shape-bottom.png')} alt='shape-bottom' className='shape-bottom'/>
    </main>
  )
}