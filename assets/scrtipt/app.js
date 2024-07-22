const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const icon = document.querySelector(".icon");
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const allforecast = document.querySelector(".allforecast");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  Weather(input.value);
});

async function Weather(cityName) {
  const apiKey = "a25c64308d1540a429c6e500948ed49c";
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}`;

  const response = await fetch(baseUrl + `&appid=${apiKey}`);

  let data = await response.json();

  console.log(data, "dataa");
  city.innerHTML = data.name;
  temp.innerHTML = "Temp -" + Math.round(data.main.temp) + "°C";
  humidity.innerHTML = "Humidity -" + data.main.humidity + "%";
  wind.innerHTML = "Wind speed -" + data.wind.speed + "km/h";
  data.weather.forEach((item) => {
    icon.setAttribute(
      "src",
      "http://openweathermap.org/img/w/" + item.icon + ".png"
    );
    icon.style.display = "block";
    allforecast.style.backgroundColor = "rgba(116, 161, 192, 0.6)";
  });
}
