let APIKEY = "31ddc659e3d01083936ae5fe5b503c97";
let cityName = "Mumbai";
let displayweathericon = document.querySelector("#weathericon");
let displaycondn = document.querySelector(".currenweathercondn");
let displayLocation = document.querySelector(".location");
let displayTemp = document.querySelector(".currentweathervalue");

const getWeather = async () => {
  let city = document.querySelector("#search").value;
  console.log(city);
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`,
    { mode: "cors" }
  );

  const weatherData = await response.json();
  console.log(weatherData);
  displayLocation.innerHTML = city.toUpperCase();
  displaycondn.innerHTML = weatherData.weather[0].main;
  displayTemp.innerHTML = weatherData.main.temp + " °C";
  displayweathericon.src = "sunny.png";
};

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getWeather();
  }
});

