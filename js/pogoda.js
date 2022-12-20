function GetInfo() {

	const newName = document.getElementById("cityInput");
	const cityName = document.getElementById("cityName");
	cityName.innerHTML = "--" + newName.value + "--";

}
//данные ввела в карточку но function GetInfo неработает
//-город поставить не могу и температура не меняется
// + newName.value +  надо поставить в ссылку -не получается или не там пытаюсь поставить

fetch(
	"https://api.open-meteo.com/v1/forecast?latitude=47.85&longitude=35.12&daily=windspeed_10m_max,windgusts_10m_max&current_weather=true&timezone=Europe%2FMoscow&start_date=2022-12-20&end_date=2022-12-25"
)
	.then((response) => response.json())
	.then((data) => renderWeather(data))
	.catch((err) => console.log(err));

function renderWeather(weather) {
	console.log(weather.daily.windspeed_10m_max);
	console.log(weather.daily.windgusts_10m_max);


	//вывести  данные про ветер

	const windSpeed1Day = document.querySelector(".windSpeed1");
	const windSpeed1DayEl = document.createElement("p");
	windSpeed1Day.append(windSpeed1DayEl);
	windSpeed1DayEl.textContent = `${weather.daily.windspeed_10m_max[0]} км/год`;

	const windSpeed2Day = document.querySelector(".windSpeed2");
	const windSpeed2DayEl = document.createElement("p");
	windSpeed2Day.append(windSpeed2DayEl);
	windSpeed2DayEl.textContent = `${weather.daily.windspeed_10m_max[1]} км/год`;

	const windSpeed3Day = document.querySelector(".windSpeed3");
	const windSpeed3DayEl = document.createElement("p");
	windSpeed3Day.append(windSpeed3DayEl);
	windSpeed3DayEl.textContent = `${weather.daily.windspeed_10m_max[2]} км/год`;


	const windGusts1Day = document.querySelector(".windGusts1");
	const windGusts1DayEl = document.createElement("p");
	windGusts1Day.append(windGusts1DayEl);
	windGusts1DayEl.textContent = `${weather.daily.windgusts_10m_max[0]} км/год`;

	const windGusts2Day = document.querySelector(".windGusts2");
	const windGusts2DayEl = document.createElement("p");
	windGusts2Day.append(windGusts2DayEl);
	windGusts2DayEl.textContent = `${weather.daily.windgusts_10m_max[1]} км/год`;

	const windGusts3Day = document.querySelector(".windGusts3");
	const windGusts3DayEl = document.createElement("p");
	windGusts3Day.append(windGusts3DayEl);
	windGusts3DayEl.textContent = `${weather.daily.windgusts_10m_max[2]} км/год`;
}

function DefaultScreen() {
	document.getElementById("cityInput").defaultValue = "kiev";
	GetInfo();
}


//получить название недели
const d = new Date();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function название недели
function CheckDay(day) {
	if (day + d.getDay() > 6) {
		return day + d.getDay() - 7;
	}
	else {
		return day + d.getDay();
	}
}
for (i = 0; i < 3; i++) {
	document.getElementById("day" + (i + 1)).innerHTML = weekday[CheckDay(i)];
}

function correctTime(time) {
	let h = time.getHours(),
		m = time.getMinutes(),
		s = time.getSeconds();
	return `${(h < 10 ? "0" : "") + h}:${(m < 10 ? "0" : "") + m}:${(s < 10 ? "0" : "") + s}`;
}
function showDateTime2() {
	var now = new Date();
	date.textContent = `${now.toLocaleDateString("uk-UA", { day: "numeric", month: "long" })} ${now.getFullYear()} року, `
		+ now.toLocaleDateString("uk-UA", { weekday: "long" });
	time.textContent = correctTime(now);
}
showDateTime2();
setInterval(showDateTime2, 1000);


