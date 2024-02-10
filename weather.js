function getWeather() {
    const apiKey = 'ae8d208d5dc43de533e3fa2295f45dd8'; //  API key
    const locationInput = document.getElementById('location');
    const weatherInfo = document.getElementById('weatherInfo');

    const location = locationInput.value;

    if (location === '') {
        alert('Please enter a location');
        return;
    }
//ae8d208d5dc43de533e3fa2295f45dd8
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    
    const weatherIcon = document.querySelector(".weather-icon");

async function checkweather() {
    const response = await fetch(apiUrl + '&appid=${apiKey}');
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "https://tse1.mm.bing.net/th?id=OIP.4Jlxb5fO9CTWbhDy223K6gHaEY&pid=Api&P=0&h=220";
    }
    if(data.weather[0].main == "Clear") {
        weatherIcon.src = "https://tse1.mm.bing.net/th?id=OIP.Yapb4hxiSCqwxv8jJhFGCwHaGz&pid=Api&P=0&h=220";
    }
    if(data.weather[0].main == "Rain") {
        weatherIcon.src = "https://tse2.mm.bing.net/th?id=OIP.mObdgNCwtmYRJccKJpUpOwHaEz&pid=Api&P=0&h=220";
    }
    if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = "https://cdn3d.iconscout.com/3d/premium/thumb/drizzle-weather-7096832-5753008.png";
    }
    if(data.weather[0].main == "Mist") {
        weatherIcon.src = "https://tse3.mm.bing.net/th?id=OIP.dXThFmSmsA1QUDJU4R8eawHaEB&pid=Api&P=0&h=220";
    }
    if(data.weather[0].main == "snow") {
        weatherIcon.src = "https://tse2.mm.bing.net/th?id=OIP.qIx1OoIBakRyPd2hQd6yXgHaE-&pid=Api&P=0&h=220";
    }
    
}

checkweather();
       
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const { name, main, weather } = data;
            const temperature = main.temp;
            const conditions = weather[0].description;

            const weatherHtml = `
                <p>Location: ${name}</p>
                <p>Temperature: ${temperature} &#8451;</p>
                <p>Conditions: ${conditions}</p>
            `;

            weatherInfo.innerHTML = weatherHtml;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}