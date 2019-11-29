const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector('.doggos');

function addDoggo() {
    fetch(BREEDS_URL)
        .then(response => response.json())
        .then(data => {
            const img = document.createElement('img');
            img.src = data.message;
            img.alt = 'Cute Doggo';
            doggos.appendChild(img);
        });

}

document.querySelector('.add-doggo').addEventListener
    ('click', addDoggo)


console.log("this will log first");