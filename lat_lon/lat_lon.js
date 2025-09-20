function showweatherDetails(event) {
    event.preventDefault();
  
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;
  
    const apiKey = '665b8a9271bb20104933485dbcba35d8'; // Your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch weather data.');
        }
        return response.json();
      })
      .then(data => {
        const temperatureCelsius = (data.main.temp - 273.15).toFixed(2); // Convert from Kelvin to Celsius
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `
          <h2>Weather in ${data.name}</h2>
          <p>Temperature: ${temperatureCelsius} &#8451;</p>
          <p>Weather: ${data.weather[0].description}</p>
        `;
      })
      .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
      });
  }
  
  document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
  