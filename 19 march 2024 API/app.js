let apiKey = "5a32de4e7b4ad7cae32f2b186fa3111b";
let cityName;
let searchBtn = document.querySelector("#search");
let temprature = document.querySelector("#temprature");
let maxTemprature = document.querySelector("#maximum-temprature");
let minTemprature = document.querySelector("#minimum-temprature");
let humadity = document.querySelector("#humadity");
let pressure = document.querySelector("#pressure");
let speedOfWind = document.querySelector("#speed-of-wind");
let degOfWind = document.querySelector("#degree-of-wind");
let sunrise = document.querySelector("#sunrise");
let country = document.querySelector("#country-name");

searchBtn.addEventListener("click", function () {
  cityName = document.querySelector("#input-city-name").value;
  // Make a request for a user with a given ID
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    )
    .then(function (response) {
      // handle success
      temprature.innerHTML = `Current temprature of ${cityName} is ${response.data.main.temp}`;
      maxTemprature.innerHTML = `Maximum temprature of ${cityName} is ${response.data.main.temp_max}`;
      minTemprature.innerHTML = `Manimum temprature of ${cityName} is ${response.data.main.temp_max}`;
      pressure.innerHTML = `pressure in wind of ${cityName} is ${response.data.main.pressure}`;
      sunrise.innerHTML = `sunrise in ${cityName} is  ${response.data.sys.sunrise}`;
      country.innerHTML = `${cityName} is the city of ${response.data.sys.country}`;
      speedOfWind.innerHTML = `Speed of wind in ${cityName} ${response.data.wind.speed}`;
      degOfWind.innerHTML = `Direction of wind in Degree ${response.data.wind.deg}`;
      humadity.innerHTML = `humadity in wind is   ${response.data.main.humidity}`;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
});
