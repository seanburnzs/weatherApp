# Weather App

A simple weather application that fetches real-time weather data using the OpenWeatherMap API and displays the current weather conditions for a specified city.

## Features

- Search for a city to get current weather conditions
- Displays temperature, weather description, and city name

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- OpenWeatherMap API

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/seanburnzs/weatherApp.git
    cd weatherApp
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:

    ```plaintext
    API_KEY=api_key_here
    ```

4. Run the application:

    ```bash
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## File Structure

```plaintext
weatherapp/
├── .env
├── .gitignore
├── package.json
├── server.js
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
