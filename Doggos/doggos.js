const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
const INIT_URL = 'https://dog.ceo/api/breeds/image/random';
const select = document.querySelector('.breeds');
const img = document.querySelector('.doggo-img');

function init(BREEDS_URL) {
    fetch(BREEDS_URL)
        .then(response => response.json())
        .then(data => {
            const breedsObject = data.message;
            const breedsArray = Object.keys(breedsObject);

            for (let i = 0; i < breedsArray.length; i++) {
                const option = document.createElement('option');
                option.value = breedsArray[i];
                option.innerText = breedsArray[i];
                select.appendChild(option);
            }
        });

    addDog(INIT_URL);
}

function addDog(doggo) {
    //show loading spinner
    fetch(doggo)
        .then(response => response.json())
        .then(data => {
            img.src = data.message;
            img.alt = 'Cute Doggo';
            //stop loading spinner
        });
}

select.addEventListener('change', event => {
    let doggo = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
    addDog(doggo);
});

init(BREEDS_URL);