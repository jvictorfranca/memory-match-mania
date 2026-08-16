
import { useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard'
import ResetButton from './components/ResetButton'
import ScoreBoard from './components/ScoreBoard'
import Settings from './components/Settings'
import generateIcons from './utils/generateIcons'
import shuffleDeck from './utils/shuffleDeck'
import Graffiti from './components/Graffiti'

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
    <div className="h-screen flex flex-col p-4 pax-w-screen-md mx-auto bg-gradient-to-bl from-cyan-100 via-blue-50 to-white">
      <h1>Memory Match Mania</h1>


      <ResetButton onReset = {() => {reInitializeGame(gridSize)}}/>
      <Settings onGridChange={reInitializeGame}/>

      <div className="flex-grow">

        <GameBoard gridSize={gridSize} deck={deck} setMoves={setMoves} setMatches={setMatches} />
      </div>

      <ScoreBoard moves={moves} matches={matches} total={deck.length/2}/>

      {matches === deck.length/2 && <Graffiti />}

      <button onClick={() => {console.log(deck)}}>Log state</button>
    </div>
  )
}

export default App
