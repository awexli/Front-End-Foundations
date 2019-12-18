let dataVideoId = ['155_EYRGyO8', 'l_mW3S9HB08', 'rLWVJstzAH8'];
let index = 0;
let player;

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const addBtn = document.querySelector('.add');
const delBtn = document.querySelector('.del');
const firstBtn = document.querySelector('.first');
const lastBtn = document.querySelector('.last');

let ytLink = document.getElementById('yt-link');
let message = document.getElementById('msg');

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        width: 640,
        height: 360,
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
        addToList();
    }
});

delBtn.addEventListener('click', function () {
    let isNotEndOfPlaylist = Boolean(index < dataVideoId.length - 1);
    let isEndOfPlaylist = Boolean(index == dataVideoId.length - 1);
    let hasAtleastTwoVideos = Boolean(dataVideoId.length > 1);

    if (index > -1 && isNotEndOfPlaylist) {
        dataVideoId.splice(index, 1);
        player.cueVideoById(dataVideoId[index]);
    } else if (isEndOfPlaylist && hasAtleastTwoVideos) {
        dataVideoId.splice(index, 1);
        index--;
        player.cueVideoById(dataVideoId[index]);
    }

    if (index == 0) {
        prevBtn.disabled = true;
    }

    if (index == dataVideoId.length - 1) {
        nextBtn.disabled = true;
    }

    message.innerHTML = "Video Deleted!";

});

firstBtn.addEventListener('click', function () {
    index = 0;
    player.cueVideoById(dataVideoId[index]);

    if (dataVideoId.length > 1) {
        nextBtn.disabled = false;
        prevBtn.disabled = true;
    }

})

lastBtn.addEventListener('click', function () {
    index = dataVideoId.length - 1;
    player.cueVideoById(dataVideoId[index]);

    if (dataVideoId.length > 1) {
        nextBtn.disabled = true;
        prevBtn.disabled = false;
    }
})

//-----------------------------------------------------------------------------------

function addToList() {
    let ytAddress = "https://www.youtube.com/watch?";
    let list = document.createElement('li');
    let link = document.createElement('a');

    // link.innerHTML = ytAddress + "v=" + dataVideoId[index];
    // link.href = ytAddress + "v=" + dataVideoId[index];
    // link.target = '_blank';
    // list.append(link);
    // document.querySelector('.list').append(list);
}

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

// list video links
//  - display title of video
//  - delete video -> delete link
//  - cuevideoby index when clicking on that link
//Check for duplicate links

//cuevideobyid(videoid,startseconds,endseconds)