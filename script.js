const songs = [
    {
        audio: document.getElementById("song1"),
        name: document.getElementById("name1")
    },
    {
        audio: document.getElementById("song2"),
        name: document.getElementById("name2")
    },
    {
        audio: document.getElementById("song3"),
        name: document.getElementById("name3")
    }
];

let currentSongIndex = 0;

const playBtn = document.getElementById("playMusic");
const pauseBtn = document.getElementById("pauseMusic");
const nextBtn = document.getElementById("nextSong");
const progressBar = document.getElementById("progressBar");

function playSong(index) {
    songs[index].audio.play();
    songs[index].name.classList.remove("d-none");
    songs[index].name.classList.add("d-flex");
}

function pauseSong(index) {
    songs[index].audio.pause();
}

function nextSong(index) {
    songs[index].name.classList.remove("d-flex");
    songs[index].name.classList.add("d-none");
}

playBtn.onclick = () => {
    playSong(currentSongIndex);
}

pauseBtn.onclick = () => {
    pauseSong(currentSongIndex);
}

nextBtn.onclick = (index) => {
    nextSong(currentSongIndex)
    pauseSong(currentSongIndex);
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
}
