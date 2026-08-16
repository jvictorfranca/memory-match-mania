let soundQueued = false

const playFlipSound = (audioFile = "/audio/flip.mp3") => {
    if (soundQueued) return;
    soundQueued = true
    requestAnimationFrame (() => {
        let audio = new Audio(audioFile)
        audio.play()

        soundQueued = false
    })
}

export default playFlipSound