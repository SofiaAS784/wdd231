const forecastCard = document.querySelector('#forecast');
// const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const urlF = 'https://api.openweathermap.org/data/2.5/forecast/daily?lat=-38.01&lon=-57.55&units=metric&cnt=3&appid=1e97c7b47183d19b96bda4afe5c87eab';

async function apiFetchF() {
    try {
        const response = await fetch(urlF);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetchF();

function displayForecast(data) {
    let day1 = document.createElement('p');
    let day2 = document.createElement('p');
    let day3 = document.createElement('p');

    // const today = new Date();
    // const currentDay = dayNames[today.getDate()];
    // console.log('Today is:', currentDay);

    day1.textContent = `Today: ${data.list[0].temp.day}°C`;
    day2.textContent = `Tomorrow: ${data.list[1].temp.day}°C`;
    day3.textContent = `After Tomorrow: ${data.list[2].temp.day}°C`;

    forecastCard.appendChild(day1);
    forecastCard.appendChild(day2);
    forecastCard.appendChild(day3);
}