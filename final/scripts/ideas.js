const displaySet = document.getElementById('set');
const info = document.getElementById('ideas');

const suggestions = [
    {
        title: 'Social Activity',
        desc: 's',
        characteristics: 's',
        examples: [
            's',
            'e',
            'r',
            'l',
            'o'
        ]
    },
    {
        title: 'Physical Activity',
        desc: 's',
        characteristics: 's',
        examples: [
            's',
            'e',
            'r',
            'l',
            'o'
        ]
    },
    {
        title: 'Intellectual Activity',
        desc: 's',
        characteristics: 's',
        examples: [
            's',
            'e',
            'r',
            'l',
            'o'
        ]
    },
    {
        title: 'Spiritual Activity',
        desc: 's',
        characteristics: 's',
        examples: [
            's',
            'e',
            'r',
            'l',
            'o'
        ]
    }
]

function createCard(suggestions) {
    suggestions.forEach(suggestion => {
        const idea = document.createElement('section');
        const title = document.createElement('h2');
        const action = document.createElement('a');
        title.textContent = suggestion.title;
        action.setAttribute('href', '#');
        action.textContent = 'DISCOVER MORE';
        if (suggestion.title == 'Social Activity') {
            idea.style.backgroundImage = 'linear-gradient(to right, #215600, #45b400)'
        }
        else if (suggestion.title == 'Physical Activity') {
            idea.style.backgroundImage = 'linear-gradient(to right, #7b003b, #d00065)'
        }
        else if (suggestion.title == 'Intellectual Activity') {
            idea.style.backgroundImage = 'linear-gradient(to right, #8b4800, #ce6a00)'
        }
        else if (suggestion.title == 'Spiritual Activity') {
            idea.style.backgroundImage = 'linear-gradient(to right, #005c79, #0096c4)'
        }

        action.addEventListener('click', () => {
            displayInfo(suggestion);
        })

        idea.appendChild(title);
        idea.appendChild(action);
        displaySet.appendChild(idea);
    })
}

function displayInfo(suggestion) {
    info.innerHTML = '';
    info.innerHTML = `
    <button id="closeModal">✖️</button>
    <h2>${suggestion.title}</h2>
    <p>${suggestion.desc}</p>
    <p>${suggestion.characteristics}</p>
    <ul>${suggestion.examples.map(example => `<li>• ${example}</li>`).join('')}</ul>
    `;
    if (suggestion.title == 'Social Activity') {
        info.style.border = '5px solid #45b400'
    }
    else if (suggestion.title == 'Physical Activity') {
        info.style.border = '5px solid #c3005e'
    }
    else if (suggestion.title == 'Intellectual Activity') {
        info.style.border = '5px solid #ce6a00'
    }
    else if (suggestion.title == 'Spiritual Activity') {
        info.style.border = '5px solid #0096c4'
    }

    info.showModal();

    closeModal.addEventListener("click", () => {
        info.close();
    })
}

createCard(suggestions);