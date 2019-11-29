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

const spinner = document.querySelector('.spinner');

function addDog(doggo) {
    spinner.classList.add('show');
    img.classList.remove('show');
    fetch(doggo)
        .then(response => response.json())
        .then(data => {
            img.src = data.message;
        });
}

select.addEventListener('change', event => {
    let doggo = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
    addDog(doggo);
});

img.addEventListener('load', function() {
    spinner.classList.remove('show');
    img.classList.add('show');
})

init(BREEDS_URL);