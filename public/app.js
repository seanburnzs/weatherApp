async function getApiKey() {
    const response = await fetch('/api-key');
    const data = await response.json();
    return data.apiKey;
}

document.getElementById('search-btn').addEventListener('click', async () => {
    const apiKey = await getApiKey();
    fetchWeather(apiKey);
});

function fetchWeather(apiKey) {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error fetching the weather data:', error));
}

function displayWeather(data) {
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    document.getElementById('city-name').textContent = cityName;
    document.getElementById('temperature').textContent = `Temperature: ${temperature}\u00B0C`;
    document.getElementById('description').textContent = `Description: ${description}`;
}
