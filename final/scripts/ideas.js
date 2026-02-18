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
            'Volley Tournament',
            'Soccer Activity',
            'Hiking Activity',
            'Day of Camping',
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
    ,
    {
        title: 'Courses',
        desc: 'The courses are a fundamental part of our YSA Center. Even if they count as a spiritual activity, we want to make notice the difference between both of them. These courses are part of Institute, so you would find more information about them in the church website.',
        characteristics: 'These courses are trimestral, so your suggestion will be consider for next semester. All the available courses are in the Institute and Seminaries section of the church website.',
        examples: [
            'Cornerstone courses like "Jesus Christ and his Everlasting Gospel" or "The Eternal Family"',
            'Elective courses like "The Divine Gift of Forgiveness" or "Church History"',
            'Scripture courses like "The Book of Mormon" or "The New Testament"',
            'Other important courses like "Family History" or "Missionary Preparation"'
        ]
    }
    ,
    {
        title: 'Workshops',
        desc: 'Like the courses, the workshops are a powerful learning tool, but instead of a single class, the idea is to create a constant environment of learning that are focused on strength or develop different hobbies or skill.',
        characteristics: 'These workshops are part mostly of the intellectual part. They can be a mean to learn how to play an instrument, a new language, how to become a great leader and so for. The options are a lot, so we just need something to do and someone to provide the class. As Young Single Adults, we are here to help each other to keep learning.',
        examples: [
            'Singing classes, dancing classes',
            'English classes, Italian classes',
            'Cooking workshop',
            'Volley classes',
            'Family search workshop'
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
            idea.style.backgroundImage = 'linear-gradient(to right, #5a002c, #d00065)'
        }
        else if (suggestion.title == 'Intellectual Activity') {
            idea.style.backgroundImage = 'linear-gradient(to right, #5b2f00, #ce6a00)'
        }
        else if (suggestion.title == 'Spiritual Activity') {
            idea.style.backgroundImage = 'linear-gradient(to right, #004c63, #0096c4)'
        }
        else if (suggestion.title == 'Courses') {
            idea.style.backgroundImage = 'linear-gradient(to right, #03005a, #0e00cf)'
        }
        else if (suggestion.title == 'Workshops') {
            idea.style.backgroundImage = 'linear-gradient(to right, #550000, #c40000)'
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
    <p><strong>Some examples of ideas you can suggest:</strong></p>
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
    else if (suggestion.title == 'Courses') {
        info.style.border = '5px solid #0e00cf'
    }
    else if (suggestion.title == 'Workshops') {
        info.style.border = '5px solid #c40000'
    }

    info.showModal();

    closeModal.addEventListener("click", () => {
        info.close();
    })
}

createCard(suggestions);