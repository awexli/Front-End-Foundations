let dataVideoId = ['155_EYRGyO8', 'l_mW3S9HB08', 'YEKO748WU1o', 'hXj78sr6Mzk', 'CL_BTmrrZW8'];
let index = 0;
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        width: 600,
        height: 400,
        videoId: dataVideoId[index]
    });
}

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const addBtn = document.querySelector('.add');

prevBtn.addEventListener('click', function () {
    index--;
    player.cueVideoById(dataVideoId[index])
    nextBtn.disabled = false;

    if (index == 0) {
        prevBtn.disabled = true;
    }
});

nextBtn.addEventListener('click', function () {
    index++;
    player.cueVideoById(dataVideoId[index])
    prevBtn.disabled = false;

    if (index == dataVideoId.length - 1) {
        nextBtn.disabled = true;
    }
});


addBtn.addEventListener('click', function () {
    dataVideoId.push('155_EYRGyO8');
});