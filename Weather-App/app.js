const apikey = "0uoHAEuHGnOsdlvujhLbgfKBkaU8ZW8g";
function fetchWeather(event) {
  event.preventDefault();
  let city = document.getElementById("search").value;
  if (city === "") {
    alert("Please enter a city");
    return;
  }
  // console.log(city);
  let cityCodeURL = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apikey}&q=${city}`;
  fetch(cityCodeURL)
    .then((response) => response.json())
    .then((data) => {
      cityCode = data[0].Key;
      let weatherURL = `http://dataservice.accuweather.com/currentconditions/v1/${cityCode}?apikey=${apikey}`;
      fetch(weatherURL)
        .then((res) => res.json())
        .then((d) => {
          // console.log(d);
          let city = data[0].EnglishName;
          // console.log(city);
          let temp = d[0].Temperature.Metric.Value;
          // console.log(temp);
          let weather = d[0].WeatherText;
          document.getElementById("city").innerText = `City: ${city}`;
          document.getElementById("temp").innerText = `Temperature: ${temp}°C`;
          document.getElementById("weather").innerText = `Weather: ${weather}`;
        });
    })
    .catch((error) => {
      console.log(error);
    });
}
