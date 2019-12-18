const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const player = document.getElementById('player');

let videos = ['155_EYRGyO8', 'l_mW3S9HB08', 'YEKO748WU1o', 'hXj78sr6Mzk', 'CL_BTmrrZW8'];
let currentlySelected = 0;
let videoId = videos[currentlySelected];

prevBtn.addEventListener('click', function () {
    currentlySelected--;
    videoId = videos[currentlySelected]
    init(videoId);
    nextBtn.disabled = false;

    if (currentlySelected == 0) {
        prevBtn.disabled = true;
    }
});

nextBtn.addEventListener('click', function () {
    currentlySelected++;
    videoId = videos[currentlySelected]
    init(videoId);
    prevBtn.disabled = false;

    if (currentlySelected === videos.length - 1) {
        nextBtn.disabled = true;
    }
});

function init(videoId) {
    player.src = "https://www.youtube.com/embed/" + videoId;
}

init(videoId);
