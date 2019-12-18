const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const videos = document.querySelectorAll('.video'); // node list
let currentlySelected = 0;

prevBtn.addEventListener('click', function () {
    videos[currentlySelected].classList.remove("active");
    currentlySelected--;
    videos[currentlySelected].classList.add("active");
    nextBtn.disabled = false;

    if (currentlySelected == 0) {
        prevBtn.disabled = true;
    }
    // stop video

});

nextBtn.addEventListener('click', function () {
    videos[currentlySelected].classList.remove("active");
    currentlySelected++;
    videos[currentlySelected].classList.add("active");
    prevBtn.disabled = false;

    if (currentlySelected === videos.length - 1) {
        nextBtn.disabled = true;
    }
    // stop video
});
