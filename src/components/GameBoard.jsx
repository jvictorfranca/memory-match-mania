import { useRef } from "react"
import Card from "./Card"

const GameBoard = ({gridSize, deck, setMoves, setMatches}) => {
    const cardsRef = useRef([])

    const firstCard = useRef(null)
    const secondCard = useRef(null)

    const lockBoard = useRef(false)

    const handleCardClick = (index) => {

        const card = cardsRef.current[index]

        if(!card || card.flipped || lockBoard.current) return;
        card.flip()

        if(!firstCard.current) {
            firstCard.current = card
            return
        }

        secondCard.current = card

        lockBoard.current = true

        setMoves((prev) => prev + 1)

        if (firstCard.current.icon === secondCard.current.icon) {
            firstCard.current = null
            secondCard.current = null

            lockBoard.current = false

            setMatches((prev) => prev + 1)
        } else {
            setTimeout(() => {
                firstCard.current.unflip()
                secondCard.current.unflip()

                firstCard.current = null
                secondCard.current = null
                lockBoard.current = false
            }, 1000)
        }
        
    }

    return (
        <div className="grid gap-2 h-full" style={{gridTemplateColumns: `repeat(${gridSize},minmax(0, 1fr))`, gridTemplateRows: `repeat(${gridSize},1fr`}}>
            {deck.map((icon, i) => (
                <Card key={i} icon={icon} onClick={() => {handleCardClick(i)}} ref={(el) => (cardsRef.current[i] = el)} />
            ))}
        </div>
    )
}

export default GameBoard