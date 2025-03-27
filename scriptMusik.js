document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audioPlayer");
    const playButton = document.getElementById("playButton");

    playButton.addEventListener("click", function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playButton.textContent = "Pause";
        } else {
            audioPlayer.pause();
            playButton.textContent = "Play";
        }
    });

    audioPlayer.addEventListener("ended", function () {
        playButton.textContent = "Play";
    });
});