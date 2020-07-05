let submitFormBtn = document.getElementById('submitFormBtn');
let cityInput  = document.getElementById('city');
let countryInput = document.getElementById('country');
let form = document.forms.cityCountryInputs;

let locationHTML = document.getElementById('location');
let dateHTML = document.getElementById('date');
let temperatureNumber = document.getElementById('temperatureNumber');
let weatherDescription = document.getElementById('weatherDescription');
let temperature = document.getElementById('temperature');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let cloudCover = document.getElementById('cloudCover');
let uvIndex = document.getElementById('uvIndex');
let visibility = document.getElementById('visibility');
let windSpeed = document.getElementById('windSpeed');
let windDirection = document.getElementById('windDirection');
let windDegree = document.getElementById('windDegree');

let temperatureLocationBlock = document.getElementById('temperatureLocationBlock');
let weatherDescriptionBlock = document.getElementById('weatherDescriptionBlock');
let weatherInfo = document.getElementById('weatherInfo');
let welcomePhrase = document.getElementById('welcomePhrase');

let error = document.getElementById('error');

let localWeather = document.getElementById('localWeather');
let history = document.getElementById('history');
let closeHistoryBlock = document.getElementById('closeHistoryBlock');
let historyRequestsBlock = document.getElementById('historyRequestsBlock');
let scrollHistoryBlock = document.getElementById('scrollHistoryBlock');
let cleanAll = document.getElementById('cleanAll');

let host = 'http://api.weatherstack.com/current?access_key=b27bbe6126910fbe5e44ee53a22f3937&query=';

if (localStorage.getItem('requests') === null) {
    var requests = [];
} else {
    var requests = JSON.parse(localStorage.getItem('requests'));
}

function displayWeather() {
    fetch(`${host}${cityInput.value},${countryInput.value}`)
        .then(res => res.json())
        .then(res => saveInfo(res))
        .then(res => addInfoOnPage(res))
        .then(showBlocks)
        .then(addInfoInHistoryBlock)
        .catch(errorMessage)

        return false;
}

submitFormBtn.addEventListener('click', displayWeather);
form.addEventListener('submit', function(){event.preventDefault()});

function cleanInput(...param) {
    for (let i = 0; param.length > i; i++) {
        param[i].value = '';
    }
}

function saveInfo(result) {
    const current = result.current;
    const location = result.location;

    let infoAboutWeather = {
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
        name: location.name
    };

    let findItem = requests.findIndex((item) => (item.name === infoAboutWeather.name && item.country === infoAboutWeather.country));
    
    if (findItem === -1) {
        requests.push(infoAboutWeather);
    } else {
        requests[findItem] = infoAboutWeather;
    }

    localStorage.setItem('requests', JSON.stringify(requests));

    return infoAboutWeather;
}

function addInfoOnPage(result) {
    error.style.display = 'none';
    temperatureLocationBlock.style.marginTop = '7vw';

    temperatureNumber.innerHTML = result.feelslike;
    locationHTML.innerHTML = `${result.name}, ${result.country}`;

    let date = splitDate();
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
    for (let i = 0; block.length > i; i++) {
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

function splitDate() {
    let str = Date();
    let arr = str.split(' ');

    switch(arr[0]) {
        case 'Mon': arr[0] = 'Monday'; break;
        case 'Tue': arr[0] = 'Tuesday'; break;
        case 'Wed': arr[0] = 'Wednesday'; break;
        case 'Thu': arr[0] = 'Thursday'; break;
        case 'Fri': arr[0] = 'Friday'; break;
        case 'Sat': arr[0] = 'Saturday'; break;
        case 'Sun': arr[0] = 'Sunday'; break;
    }

    return arr;
}

function showLocalWeather() {
    let getCoordinates = new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition((result) => {
            let coordinates = {
                latitude: result.coords.latitude,
                longitude: result.coords.longitude
            };
    
            resolve(coordinates);
        }, (error) => {
            alert(`The location is not found.`);
        })
    });

    getCoordinates
        .then(coordinates => fetch(`${host}${coordinates.latitude},${coordinates.longitude}`))
        .then(res => res.json())
        .then(res => saveInfo(res))
        .then(res => addInfoOnPage(res))
        .then(addInfoInHistoryBlock)
        .then(showBlocks)
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

function createParamElement(value) {
    let parameterBox = document.createElement(`div`);
    parameterBox.className = `parameterBox`;
    parameterBox.innerHTML = value;

    return parameterBox;
}

function cleanInnerHTML(block) {
    block.innerHTML = '';
}

function addInfoInHistoryBlock() {
    cleanInnerHTML(scrollHistoryBlock);

    let array = JSON.parse(localStorage.getItem('requests'));
    if (array != null) {
        for (let i = 0; array.length > i; i++) {
            let horizontalHistoryBlock = document.createElement(`div`);
            horizontalHistoryBlock.className = `horizontalHistoryBlock`;

            let locationName = document.createElement(`div`);
            locationName.className = `locationName`;
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

function cleanLocalStorage() {
    requests = [];
    localStorage.clear();
    addInfoInHistoryBlock();
}

cleanAll.addEventListener('click', cleanLocalStorage);
