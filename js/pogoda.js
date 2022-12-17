function GetInfo() {

	const newName = document.getElementById("cityInput");
	const cityName = document.getElementById("cityName");
	cityName.innerHTML = "--" + newName.value + "--";

	fetch('https://api.open-meteo.com/v1/forecast?latitude=' + newName.value + '=temperature_2m,windspeed_10m,winddirection_10m,windgusts_10m&start_date=2022-12-16&end_date=2022-12-19')
		.then(response => response.json())
		.then(data => renderWeather(data))
		.catch(err => console.log(err));


	function renderWeather(weather) {
		const rootDiv = document.getElementById('card');

		const temperatureEl = document.createElement('div');
		const windspeedEl = document.createElement('div');
		const winddirectionEl = document.createElement('div');
		const windgustsEl = document.createElement('div');


		rootDiv.append(temperatureEl, windspeedEl, winddirectionEl, windgustsEl);

		temperatureEl.textContent = weather.hourly.temperature_2m;
		windspeedEl.textContent = weather.hourly.windspeed_10m;
		winddirectionEl.textContent = weather.hourly.winddirection_10m;
		windgustsEl.textContent = weather.hourly.windgusts_10m;
	}
}

//function renderWeather(weather) {
//	for (i = 0; i < 3; i++) {
//document.getElementById("day" + (i + 1) + "T").innerHTML = "T: " + Number(data.list[i].weather.hourly.temperature_2m).+ "°";
//	}
//}



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


