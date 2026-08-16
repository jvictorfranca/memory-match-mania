
import { useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard'
import ResetButton from './components/ResetButton'
import ScoreBoard from './components/ScoreBoard'
import Settings from './components/Settings'
import generateIcons from './utils/generateIcons'
import shuffleDeck from './utils/shuffleDeck'

function App() {

  const [gridSize, setGridSize] = useState(4)

  
  const [moves, setMoves] = useState(0)
  
  const [matches, setMatches] = useState(0)
  
  const [resetCount, setResetCounter] = useState(0)
  
  const createNewDeck = (size) => {
    const iconCount = (size ** 2) / 2
    
    const icons = generateIcons(iconCount)
    
    const newDeck = [...icons, ...icons]
    
    return shuffleDeck(newDeck)
  }
  const [deck, setDeck] = useState(() => createNewDeck(4))

  const reInitializeGame = (size) => {
    setGridSize(size)

    setDeck(createNewDeck(size))

    setMatches(0)
    setMoves(0)
  }
  
  return (
    <div>
      <h1>Memory Match Mania</h1>


      <ResetButton onReset = {() => {reInitializeGame(gridSize)}}/>
      <ScoreBoard />
      <GameBoard />
      <Settings onGridChange={reInitializeGame}/>

      <button onClick={() => {console.log(deck)}}>Log state</button>
    </div>
  )
}

export default App
