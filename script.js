const apiKey = "afaf9c4b1fc94ec941a9c2950eb4a2d4";

function fetchWeather() {
    const cityName = document.getElementById("cityInput").value.trim();
    if (!cityName) {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("API Response:", data); // Debugging: Log the response

            if (data.cod !== 200) {
                document.getElementById("errorMessage").innerText = `Error: ${data.message}`;
                document.getElementById("location").innerText = "";
                document.getElementById("temperature").innerText = "";
                document.getElementById("condition").innerText = "";
                return;
            }

            document.getElementById("location").innerText = `Location: ${data.name}, ${data.sys.country}`;
            document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById("condition").innerText = `Condition: ${data.weather[0].description}`;
            document.getElementById("errorMessage").innerText = "";
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            document.getElementById("errorMessage").innerText = "Error fetching weather data!";
        });
}
