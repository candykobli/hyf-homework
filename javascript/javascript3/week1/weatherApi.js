const button = document.getElementById("showWeather");
button.addEventListener("click", weatherApp);

async function weatherApp() {
  try {
    const weatherAPI = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        document.getElementById("city").value
      }&appid=da1992c62a4f1b2ee6c4621933294bb1`
    );

    const weatherData = await weatherAPI.json();
    const theChosenCity = weatherData.name;
    const Temperature = `${Math.round(weatherData.main.temp - 273)}°C`;
    const Icon = weatherData.weather[0].icon;
    const IconDesc = weatherData.weather[0].description;
    console.log(Icon);

    const windSpeed = weatherData.wind.speed;
    const howClowdy = weatherData.weather[0].description;
    const sunrise = new Date(weatherData.sys.sunrise * 1000);
    const sunset = new Date(weatherData.sys.sunset * 1000);
    const mapCityLon = weatherData.coord.lon;
    const mapCityLat = weatherData.coord.lat;
    // -----------visualInfo--------------------------------
    const visualDiv = document.getElementById("visualInfo");
    // city
    const heading = document.createElement("h1");
    heading.innerHTML = theChosenCity;
    visualDiv.appendChild(heading);
    // Temperature
    const temp = document.createElement("p");
    temp.innerHTML = Temperature;
    visualDiv.appendChild(temp);
    // Icon
    const weatherIcon = document.createElement("img");
    weatherIcon.src = Icon;

    weatherIcon.src = `https://openweathermap.org/img/wn/${Icon}@2x.png`;
    weatherIcon.alt = `icon of a ${IconDesc}`;
    visualDiv.appendChild(weatherIcon);
    document.body.style.backgroundImage = "url('" + Icon + "')";
    // Windspeed
    const wind_speed = document.createElement("p");
    wind_speed.innerHTML = `${windSpeed} m/s`;
    visualDiv.appendChild(wind_speed);
    // how cloudy
    const cloudOvrw = document.createElement("p");
    cloudOvrw.innerHTML = howClowdy;
    visualDiv.appendChild(cloudOvrw);
    // sunrise and sunset
    const sunsetRise = document.createElement("div");
    sunsetRise.innerHTML = "SUNRISE/SUNSET";
    visualDiv.appendChild(sunsetRise);

    const sunriseTime = document.createElement("p");
    sunriseTime.innerHTML = sunrise.toLocaleTimeString();
    sunsetRise.appendChild(sunriseTime);

    const sunsetTime = document.createElement("p");
    sunsetTime.innerHTML = sunset.toLocaleTimeString();
    sunsetRise.appendChild(sunsetTime);
    // map

    console.log(weatherData);
  } catch {
    (error) => console.error("FETCH ERROR:", error);
  }
  button.removeEventListener("click", weatherApp);
  document.querySelector("#showWeather").disabled = true;
  document.querySelector("#city").disabled = true;
}

// -------------------Button Clear Selection--------------------

function clearSelection() {
  location.reload();
}
const buttonClear = document.getElementById("clearSelection");
buttonClear.addEventListener("click", clearSelection);

// -----------------------My Location--------------------------------

const buttonLocation = document.getElementById("userLocation");
buttonLocation.addEventListener("click", getLocation);

// ------------------------myLocation----------------------------
var x = document.getElementById("map");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}
