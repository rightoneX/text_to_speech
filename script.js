const playButton = document.getElementById('play-btn')
const pauseButton = document.getElementById('pause-btn')
const stopButton = document.getElementById('stop-btn')
const speedSelection = document.getElementById('speed')
const textInput = document.getElementById('text')
let currentCharacter

playButton.addEventListener('click', () => {
    playText(textInput.value)
})

pauseButton.addEventListener('click', () => {
    pauseText()
})

stopButton.addEventListener('click', () => {
    stopText()
})

speedSelection.addEventListener('change', () => {
    stopText()
    playText(utterance.text.substring(currentCharacter))
})

const utterance = new SpeechSynthesisUtterance(text)
utterance.addEventListener('end', () => {
    textInput.disabled = false
})
utterance.addEventListener('boundary', e => {
    currentCharacter = e.charIndex
})

function playText(text) {
    if (speechSynthesis.paused && speechSynthesis.speaking) {
        return speechSynthesis.resume()
    }
    utterance.text = text
    utterance.rate = speedSelection.value || 1
    textInput.disabled = true
    speechSynthesis.speak(utterance)
}

function pauseText() {
    if (speechSynthesis.speaking) speechSynthesis.pause()
}

function stopText() {
    speechSynthesis.resume()
    speechSynthesis.cancel()
}