const shuffleDeck = (deck) => {
    const shuffled = [...deck]

    for (let i = shuffled.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1))

        const temp = shuffled[i]
        shuffled[i] = shuffled[randomIndex]
        shuffled[randomIndex] = temp
    }

    return shuffled
}

export default shuffleDeck