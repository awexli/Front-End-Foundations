let dataVideoId = ['155_EYRGyO8', 'l_mW3S9HB08', 'YEKO748WU1o', 'hXj78sr6Mzk', 'CL_BTmrrZW8'];
let index = 0;
let player;

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const addBtn = document.querySelector('.add');

let ytLink = document.getElementById('yt-link');
let message = document.getElementById('msg');
let videoAdded = false;

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
        moveToEndOfPlaylist();
        message.innerHTML = "Link Added!";
        ytLink.value = "";
    }
});

function addVideo() {
    dataVideoId.push(urlID());
    nextBtn.disabled = false;
}

function moveToEndOfPlaylist() {
    index = dataVideoId.length - 1;
    player.cueVideoById(dataVideoId[index]);
    nextBtn.disabled = true;
    prevBtn.disabled = false;
}

function urlID() {
    let id;
    let longLink = ytLink.value.indexOf('v=');
    let shortLink = ytLink.value.indexOf('e/');

    if (ytLink.value.includes("v=")) {
        id = ytLink.value.substr(longLink + 2);
    } else {
        id = ytLink.value.substr(shortLink + 2);
    }

    return id;
}

function isValidLink() {
    let url = ytLink.value;
    let regExp = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(\?\S*)?$/;
    let match = url.match(regExp);

    if (match) {
        return true;
    } else {
        message.innerHTML = "Invalid Link";
        ytLink.value = "";
        ytLink.focus();
        return false;
    }
}

//remove videos
//Check for duplicate links