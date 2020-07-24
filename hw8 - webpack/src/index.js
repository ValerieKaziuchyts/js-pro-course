import './themeChange';
import '../assets/CSS/style.css';

const submitFormBtn = document.getElementById('submitFormBtn');
const cityInput = document.getElementById('city');
const countryInput = document.getElementById('country');
const form = document.forms.cityCountryInputs;

const locationHTML = document.getElementById('location');
const dateHTML = document.getElementById('date');
const temperatureNumber = document.getElementById('temperatureNumber');
const weatherDescription = document.getElementById('weatherDescription');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const cloudCover = document.getElementById('cloudCover');
const uvIndex = document.getElementById('uvIndex');
const visibility = document.getElementById('visibility');
const windSpeed = document.getElementById('windSpeed');
const windDirection = document.getElementById('windDirection');
const windDegree = document.getElementById('windDegree');

const temperatureLocationBlock = document.getElementById('temperatureLocationBlock');
const weatherDescriptionBlock = document.getElementById('weatherDescriptionBlock');
const weatherInfo = document.getElementById('weatherInfo');
const welcomePhrase = document.getElementById('welcomePhrase');

const error = document.getElementById('error');

const localWeather = document.getElementById('localWeather');
const history = document.getElementById('history');
const closeHistoryBlock = document.getElementById('closeHistoryBlock');
const historyRequestsBlock = document.getElementById('historyRequestsBlock');
const scrollHistoryBlock = document.getElementById('scrollHistoryBlock');
const cleanAll = document.getElementById('cleanAll');

const host = 'http://api.weatherstack.com/current?access_key=b27bbe6126910fbe5e44ee53a22f3937&query=';

let requests;

if (localStorage.getItem('requests') === null) {
  requests = [];
} else {
  requests = JSON.parse(localStorage.getItem('requests'));
}

function cleanInput(...param) {
  for (let i = 0; param.length > i; i += 1) {
    param[i].value = '';
  }
}

function saveInfo(result) {
  const { current } = result;
  const { location } = result;

  const infoAboutWeather = {
    cloudcover: current.cloudcover,
    feelslike: current.feelslike,
    humidity: current.humidity,
    pressure: current.pressure,
    temperature: current.temperature,
    uv_index: current.uv_index,
    visibility: current.visibility,
    weather_descriptions: current.weather_descriptions,
    wind_degree: current.wind_degree,
    wind_dir: current.wind_dir,
    wind_speed: current.wind_speed,
    country: location.country,
    name: location.name,
  };

  const findItem = requests.findIndex((item) => (item.name === infoAboutWeather.name && item.country === infoAboutWeather.country));

  if (findItem === -1) {
    requests.push(infoAboutWeather);
  } else {
    requests[findItem] = infoAboutWeather;
  }

  localStorage.setItem('requests', JSON.stringify(requests));

  return infoAboutWeather;
}

function splitDate() {
  const str = Date();
  const arr = str.split(' ');

  switch (arr[0]) {
    case 'Mon': arr[0] = 'Monday'; break;
    case 'Tue': arr[0] = 'Tuesday'; break;
    case 'Wed': arr[0] = 'Wednesday'; break;
    case 'Thu': arr[0] = 'Thursday'; break;
    case 'Fri': arr[0] = 'Friday'; break;
    case 'Sat': arr[0] = 'Saturday'; break;
    case 'Sun': arr[0] = 'Sunday'; break;
    default: arr[0] = 'Monday';
  }

  return arr;
}

function addInfoOnPage(result) {
  error.style.display = 'none';
  temperatureLocationBlock.style.marginTop = '7vw';

  temperatureNumber.innerHTML = result.feelslike;
  locationHTML.innerHTML = `${result.name}, ${result.country}`;

  const date = splitDate();
  dateHTML.innerHTML = `${date[0]}, ${date[1]} ${date[2]}`;

  weatherDescription.innerHTML = result.weather_descriptions;

  temperature.innerHTML = result.temperature;
  humidity.innerHTML = `${result.humidity}%`;
  pressure.innerHTML = result.pressure;
  cloudCover.innerHTML = `${result.cloudcover}%`;
  uvIndex.innerHTML = `${result.uv_index} `;
  visibility.innerHTML = `${result.visibility} `;
  windSpeed.innerHTML = `${result.wind_speed} `;
  windDirection.innerHTML = result.wind_dir;
  windDegree.innerHTML = result.wind_degree;
}

function cssVisibility(value, ...block) {
  for (let i = 0; block.length > i; i += 1) {
    block[i].style.visibility = value;
    block[i].style.opacity = 1;
  }
}

function showBlocks() {
  cleanInput(cityInput, countryInput);
  cssVisibility('visible', temperatureLocationBlock, weatherDescriptionBlock, weatherInfo);
  cssVisibility('hidden', welcomePhrase);
}

function errorMessage() {
  if (cityInput.value === '' && countryInput.value === '') {
    error.innerHTML = 'Please, fill the empty fields :)';
    error.style.display = 'block';
    temperatureLocationBlock.style.marginTop = '5.2vw';
  } else {
    error.innerHTML = 'Please, check the names of the city or the country :)';
    error.style.display = 'block';
    temperatureLocationBlock.style.marginTop = '5.2vw';
  }
}

function createParamElement(value) {
  const parameterBox = document.createElement('div');
  parameterBox.className = 'parameterBox';
  parameterBox.innerHTML = value;

  return parameterBox;
}

function cleanInnerHTML(block) {
  block.innerHTML = '';
}

function addInfoInHistoryBlock() {
  cleanInnerHTML(scrollHistoryBlock);

  const array = JSON.parse(localStorage.getItem('requests'));
  if (array != null) {
    for (let i = 0; array.length > i; i += 1) {
      const horizontalHistoryBlock = document.createElement('div');
      horizontalHistoryBlock.className = 'horizontalHistoryBlock';

      const locationName = document.createElement('div');
      locationName.className = 'locationName';
      locationName.innerHTML = `${array[i].name}, ${array[i].country}`;
      horizontalHistoryBlock.append(locationName);

      horizontalHistoryBlock.append(createParamElement(array[i].temperature));
      horizontalHistoryBlock.append(createParamElement(array[i].humidity));
      horizontalHistoryBlock.append(createParamElement(array[i].pressure));
      horizontalHistoryBlock.append(createParamElement(array[i].cloudcover));
      horizontalHistoryBlock.append(createParamElement(array[i].uv_index));
      horizontalHistoryBlock.append(createParamElement(array[i].visibility));
      horizontalHistoryBlock.append(createParamElement(array[i].wind_speed));
      horizontalHistoryBlock.append(createParamElement(array[i].wind_dir));
      horizontalHistoryBlock.append(createParamElement(array[i].wind_degree));

      scrollHistoryBlock.append(horizontalHistoryBlock);
    }
  }
}

function displayWeather() {
  fetch(`${host}${cityInput.value},${countryInput.value}`)
    .then((res) => res.json())
    .then((res) => saveInfo(res))
    .then((res) => addInfoOnPage(res))
    .then(showBlocks)
    .then(addInfoInHistoryBlock)
    .catch(errorMessage);

  return false;
}

submitFormBtn.addEventListener('click', displayWeather);
form.addEventListener('submit', (event) => {
  event.preventDefault();
  displayWeather();
});

function showLocalWeather() {
  const getCoordinates = new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((result) => {
      const coordinates = {
        latitude: result.coords.latitude,
        longitude: result.coords.longitude,
      };

      resolve(coordinates);
    }, (error) => {
      alert('The location is not found.');
    });
  });

  getCoordinates
    .then((coordinates) => fetch(`${host}${coordinates.latitude},${coordinates.longitude}`))
    .then((res) => res.json())
    .then((res) => saveInfo(res))
    .then((res) => addInfoOnPage(res))
    .then(addInfoInHistoryBlock)
    .then(showBlocks);
}

localWeather.addEventListener('click', showLocalWeather);

function openHistoryBlock() {
  addInfoInHistoryBlock();
  historyRequestsBlock.style.display = 'block';
}

history.addEventListener('click', openHistoryBlock);

function closeHistory() {
  historyRequestsBlock.style.display = 'none';
}

closeHistoryBlock.addEventListener('click', closeHistory);

function cleanLocalStorage() {
  requests = [];
  localStorage.clear();
  addInfoInHistoryBlock();
}

cleanAll.addEventListener('click', cleanLocalStorage);
