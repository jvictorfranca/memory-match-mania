const Card = ({icon, key}) => {
    return (
            <div key={key} className="w-full h-full cursor-pointer select-none">
                <div className="relative w-full h-full">
                    
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

export default Card