let APIKEY = "31ddc659e3d01083936ae5fe5b503c97";
let cityName = "Mumbai";
let displayweathericon = document.querySelector("#weathericon");
let displaycondn = document.querySelector(".currenweathercondn");
let displayLocation = document.querySelector(".location");
let displayTemp = document.querySelector(".currentweathervalue");

const getWeather = async () => {
  try {
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
  displayTemp.innerHTML = Math.trunc(parseInt(weatherData.main.temp)) + "°C";
  let condn = weatherData.weather[0].main.toLowerCase();

  switch (condn) {
    case "sunny":
    case "clear":
      displayweathericon.src = "Images/sunny.png";
      break;
    case "clouds":
      displayweathericon.src = "Images/clouds.png";
      break;
    case "overcast":
      displayweathericon.src = "Images/overcast.png";
      break;
    case "rain":
      displayweathericon.src = "Images/rain.png";
      break;
    case "drizzle":
      displayweathericon.src = "Images/drizzle.png";
      break;
    case "snow":
      displayweathericon.src = "Images/snow.png";
      break;
    default:
      displayweathericon.src = "Images/sunny.png"; 
  }
  }catch(error){
    console.log(error);
  }
};

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getWeather();
  }
});

