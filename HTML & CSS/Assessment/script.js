document.addEventListener("click", e => {
    if (e.target.className == "box") {
        alert(e.target.firstElementChild.innerText);
    }
    if (e.target.className == "name") {
        alert(e.target.innerText);
    }
})