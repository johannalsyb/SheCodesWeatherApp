function citySearch(event) {
  event.preventDefault();
  let city = document.querySelector("#city-query");

  let h1 = document.querySelector("h1");
  h1.innerHTML = city.value;

  let apiKey = "918b8d9899bdd33b4c0152c02d23b5f9";
  let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
  console.log(apiurl);
  axios.get(apiurl).then(showInfo);
}

function showInfo(response) {
  let tempOfCity = Math.round(response.data.main.temp);
  let temp = document.querySelector(".temperature");
  temp.innerHTML = tempOfCity;
}
let form = document.querySelector("#form");
form.addEventListener("submit", citySearch);

/// date

let date = document.querySelector("ul li");
const options = {
  weekday: "long",
  minute: "numeric",
  hour: "numeric"
};
var formattedDate = new Intl.DateTimeFormat("GB", options).format(new Date());
date.innerHTML = formattedDate;
