let ariaMathMelody = [
    "E4:4", "D#4:4", "E4:4", "B3:4", "D4:4", "C4:4", "A3:4", "C3:4",
    "E3:4", "A3:4", "B3:4", "C4:4", "D4:4", "B3:4", "E3:4", "G3:4"
]

for (let note of ariaMathMelody) {
    let [noteName, duration] = note.split(":")
    music.playTone(Note.fromNamenoteName), music.beat(duration))
    basic.pause(100)
}
