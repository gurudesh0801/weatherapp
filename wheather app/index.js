let api = "https://api.weatherapi.com/v1/current.json";
let city = document.getElementById("city");
let apikey = "7c12e13826484f2889b162953231905";
let ch = document.getElementById("card-header");
let ct = document.getElementById("card-title");
let icon = document.getElementById("icon");
let cfooter = document.getElementById("cfooter");
let wind = document.getElementById("wind");
let rain = document.getElementById("rain");
let windDire = document.getElementById("windDire");
let humidity = document.getElementById("humidity");
let cityVal = "pune ";

// fetching the API with API key and city.
const getWeather = (city) => {
  fetch(api + "?key=" + apikey + "&q=" + city + "&aqi=no")
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      ch.innerHTML = `${response.location.name},${response.location.region}`;
      ct.innerHTML = `<h5 style="font-size: 1.4rem">${response.current.condition.text}</h5><p>${response.current.temp_c} &#8451;</p>`;
      icon.innerHTML = `<img style="width: 5rem" src="${response.current.condition.icon}"></img>`;
      cfooter.innerHTML = `<h5 style="font-size:1.2rem; color: rgb(210, 234, 255);">last update ${response.current.last_updated}</h5>`;
      wind.innerHTML = `<i class='fas fa-wind'></i><h3 class="hd1">${response.current.wind_kph} Km/h</h3>`;
      windDire.innerHTML = `<i class='fas fa-smog' my-3"></i><h3 class="hd2">${response.current.wind_dir}</h3>`;
      humidity.innerHTML = `<h3 class="fa-hum">Humidity</h3><h3 class="hd3">${response.current.humidity}%</h3>`;
      wind_mph.innerHTML = `<h3 class="fa-mph">WindMph</h3><h3 class="hd4">${response.current.wind_mph} mph</h3>`;
      country.innerHTML = `<h3 class="fa-country">Country</h3><h3 class="hd5">${response.location.country}</h3>`;
      tz.innerHTML = `<h3 class="fa-tz">Time_Zone</h3><h3 class="hd6">${response.location.tz_id}</h3>`;
      // alert("Weather is "+ response.current.condition.text+" Today");
    });
  };
  {/* <h4>Its A sunny weather</h4> */}
  // input value submit button
submit.addEventListener("click", (e) => {
  // not refresh command
  e.preventDefault();
  getWeather(city.value);
  
});

// Pune is a default value.
getWeather("pune");

// dark mode toggle dunction
function myFunction() {
  let element = document.body;
  let card_body = document.getElementById("card");
  let acc = document.getElementById("acc");
  element.classList.toggle("dark-mode");
  card_body.classList.toggle("card_dark-mode");
  acc.classList.toggle("acc_dark-mode");
}
  