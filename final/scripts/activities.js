const url = 'https://sofiaas784.github.io/wdd231/final/data/activities.json';

const coursesDisplay = document.querySelector('#courses');
const workshopsDisplay = document.querySelector('#workshops');
const devotionalsDisplay = document.querySelector('#devotionals');

async function getActivitiesData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data.activities);
            displayActivities(data.activities);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getActivitiesData();

function displayActivities(activities) {
    activities.courses.forEach((course) => {
        displayCourses(course);
    })
    activities.workshops.forEach((workshop) => {
        displayWorkshops(workshop);
    })
    activities.devotionals.forEach((devotional) => {
        displayDevotionals(devotional);
    })
    const more = document.createElement('section');
    const title = document.createElement('h2');
    const button = document.createElement('a');
    const plus = document.createElement('img');

    title.textContent = "Do you want to have another course?"
    button.setAttribute('href', 'share.html');
    button.classList.add('button');
    plus.setAttribute('src', 'images/plus-square.svg');
    plus.setAttribute('alt', 'A plus symbol');
    plus.setAttribute('loading', 'lazy');
    plus.setAttribute('width', '44px');
    plus.setAttribute('height', '44px');
    plus.setAttribute('aria-label', 'more');
    coursesDisplay.appendChild(more);
    more.appendChild(title);
    more.appendChild(button);
    button.appendChild(plus);
}

function displayCourses(course) {
    const courseCard = document.createElement('section');
    courseCard.innerHTML = `
        <h2>${course.title}</h2>
        <h3>By ${course.instructor}</h3>
        <p>Every ${course.days} at ${course.time}</p>
        <p><strong>Location:</strong> ${course.location}</p>
        <a href="#" target="_blank">Find the course material here</a>
        `
    
    coursesDisplay.appendChild(courseCard);
}

function displayWorkshops(workshop) {
    const workshopCard = document.createElement('section');
    workshopCard.innerHTML = `
        <h2>${workshop.title}</h2>
        <h3>By ${workshop.instructor}</h3>
        <p>Every ${workshop.days} at ${workshop.time}</p>
        <p><strong>Location:</strong> ${workshop.location}</p>
        <p>Invite a friend to come!</p>
        `

    workshopsDisplay.appendChild(workshopCard);
}

function displayDevotionals(devotional) {
    const devotionalCard = document.createElement('section');
    devotionalCard.innerHTML = `
        <h2>${devotional.title}</h2>
        <h3>By ${devotional.speaker}</h3>
        <p>${devotional.desc}</p>
        <p>${devotional.day} at ${devotional.time}</p>
        <p><strong>Location:</strong> ${devotional.location}</p>
        `

    devotionalsDisplay.appendChild(devotionalCard);
}