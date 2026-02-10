const url = '';

const coursesDisplay = document.querySelector('#courses');
const workshopsDisplay = document.querySelector('#workshops');
const devotionalsDisplay = document.querySelector('#devotionals');

async function getActivitiesData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data.activities);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// getActivitiesData();

const displayActivities = (activities) => {
    activities.forEach((activity) => {
        if (activity.course) {
            displayCourses(activity.course)
        } else if (activity.workshop) {
            displayWorkshops(activity.workshop)
        } else if (activity.devotional) {
            displayDevotionals(activity.devotional)
        }
    })
}

function displayCourses(course) {
    coursesDisplay.innerHTML = "";

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
    workshopsDisplay.innerHTML = "";

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
    devotionalsDisplay.innerHTML = "";

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