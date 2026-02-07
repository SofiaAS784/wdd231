import { places } from '../data/interest.mjs';
const cards = document.querySelector('.places');

const displayPlaces = (places) => {
    cards.innerHTML = "";
    places.forEach((place) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('address');
        let desc = document.createElement('p');
        let photo = document.createElement('img');

        name.textContent = place.name;
        address.textContent = place.address;
        desc.textContent = place.description;
        
        photo.setAttribute('src', place.photo_url);
        photo.setAttribute('alt', place.name);
        photo.setAttribute('loading', 'lazy');
        photo.setAttribute('width', '300');
        photo.setAttribute('height', '225');

        cards.appendChild(card);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(desc);
        card.appendChild(photo);
    })
}

displayPlaces(places);