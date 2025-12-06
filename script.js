let volume = document.getElementById("vol")
let mute = document.getElementById("mute")
let currentSound = null

document.querySelectorAll(".btn").forEach(b => {
  b.addEventListener("click", () => {
    if (currentSound) currentSound.pause()
    currentSound = new Audio(b.dataset.sound)
    currentSound.volume = volume.value
    currentSound.play()
  })
})

volume.addEventListener("input", () => {
  if (currentSound) currentSound.volume = volume.value
})

mute.addEventListener("click", () => {
  if (currentSound) currentSound.volume = 0
})