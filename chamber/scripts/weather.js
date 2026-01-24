const weatherCard = document.querySelector('#weather');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-38.01&lon=-57.55&units=metric&appid=955ff07b5d70345976e5288413f6aeb3';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayWeather(data) {
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    
    let weatherIcon = document.createElement('img');
    let temp = document.createElement('h3');
    let desc = document.createElement('h3');
    let maxTemp = document.createElement('p');
    let minTemp = document.createElement('p');
    let humidity = document.createElement('p');
    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    weatherIcon.setAttribute('loading', 'lazy');
    temp.textContent = `${data.main.temp}°C`;
    desc.textContent = data.weather[0].description;
    maxTemp.textContent = `Max temp: ${data.main.temp_max}°`;
    minTemp.textContent = `Min temp: ${data.main.temp_min}°`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;

    weatherCard.appendChild(weatherIcon);
    weatherCard.appendChild(temp);
    weatherCard.appendChild(desc);
    weatherCard.appendChild(maxTemp);
    weatherCard.appendChild(minTemp);
    weatherCard.appendChild(humidity);
}