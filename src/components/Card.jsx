import { useState, useImperativeHandle, forwardRef } from "react"
import playFlipSound from "../utils/playFlip"

const Card = ({icon, onClick}, ref) => {
    const [flipped, setFlipped] = useState(false)

    useImperativeHandle(ref, () => ({
        flip: () => {
            setFlipped(true)
            playFlipSound()
            
        },
        unflip: () => {
            setFlipped(false)
            playFlipSound()
        },
        get flipped() {return flipped},
        get icon() {return icon}
    }))
    
    return (
            <div className="w-full h-full cursor-pointer select-none perspective"
                onClick={onClick}
            >
                <div className={`relative w-full h-full ${flipped ? "rotate-y-180" : ""} transition-transofrm duration-500 transform-style preserve-3d`}>
                    
                    {/* Front*/}
                    <div className="flex items-center justify-center bg-white/70 backdrop-blue-sm border-bkue-200 w-full h-full border rounded transition-colors duration-300 absolute inset-0 backface-hidden">
                        ?
                    </div>
                    
                    {/* Back */}
                    <div className="flex items-center justify-center bg-blue-400 w-full h-full border rounded transition-colors duration-300 hover:bg-blue-500 absolute inset-0 backface-hidden rotate-y-180">
                        {icon} 
                    </div>

                </div>

            </div>
    )
}

export default forwardRef(Card)