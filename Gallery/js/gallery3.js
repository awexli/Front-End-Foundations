let dataVideoId = ['155_EYRGyO8', 'l_mW3S9HB08', 'YEKO748WU1o', 'hXj78sr6Mzk', 'CL_BTmrrZW8'];
let index = 0;
let player;

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const addBtn = document.querySelector('.add');

let ytLink = document.getElementById('yt-link');
let message = document.getElementById('msg');

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        width: 600,
        height: 400,
        videoId: dataVideoId[index]
    });
}

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

    if (isValidLink()) {
        addVideo();
        message.innerHTML = "Link Added!";
        ytLink.value = "";
    }
});

function isValidLink() {
    try {
        if (!ytLink.value.includes("youtu")) throw "Invalid Link";
    } catch (err) {
        message.innerHTML = err;
        ytLink.focus();
        return false;
    }
    return true;
}

function addVideo() {
    nextBtn.disabled = false;
    dataVideoId.push(urlID());
}

function urlID() {
    let id;
    let longLink = ytLink.value.indexOf('=');
    let shortLink = ytLink.value.indexOf('e/');

    if (ytLink.value.includes("=")) {
        id = ytLink.value.substr(longLink + 1);
    } else {
        id = ytLink.value.substr(shortLink + 2);
    }

    return id;
}