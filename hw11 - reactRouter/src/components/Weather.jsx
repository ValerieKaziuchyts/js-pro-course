import React, { useState, useCallback } from 'react';

const host = 'http://api.weatherstack.com/current?access_key=b27bbe6126910fbe5e44ee53a22f3937&query=';

function Weather() {
  const [cityInput, setCityValue] = useState('');
  const saveCityInputValue = useCallback((event) => setCityValue(event.target.value));
  const [countryInput, setCountryValue] = useState('');
  const saveCountryInputValue = useCallback((event) => setCountryValue(event.target.value));
  const [weatherResponse, setWeatherResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [weatherInfoStyle, setWeatherInfoStyle] = useState({
    opacity: 0,
  });

  async function displayWeather(e) {
    e.preventDefault();
    if (cityInput === '' && countryInput === '') {
      setErrorMessage('Please, fill the empty fields :)');
    } else {
      setErrorMessage('');
      const response = await fetch(`${host}${cityInput},${countryInput}`);
      const json = await response.json();
      setWeatherResponse(json);

      if (json.success === false) {
        setWeatherInfoStyle({ opacity: 0 });
        setErrorMessage('Please, check the names of the city or the country :)');
      } else {
        setWeatherInfoStyle({ opacity: 1 });
        setCityValue('');
        setCountryValue('');
      }
    }
  }

  const successRespons = weatherResponse && weatherResponse.success !== false;

  return (
    <>
      <form id="cityCountryInputs" onSubmit={(e) => { e.preventDefault(); }}>
        <input onChange={saveCityInputValue} value={cityInput} id="city" type="text" placeholder="Enter the city..." />
        <input onChange={saveCountryInputValue} value={countryInput} id="country" type="text" placeholder="Enter the country..." />
        <button id="submitFormBtn" type="submit" onClick={displayWeather}> Submit </button>
      </form>
      <div className="error">{errorMessage}</div>
      <div className="location">
        {successRespons ? `${weatherResponse.location.name}, ${weatherResponse.location.country}` : ''}
      </div>
      <div id="weatherInfo" className="weatherInfo" style={weatherInfoStyle}>
        <div className="verticalInfoBlock">
          <div className="infoBlock">
            <div className="iconNameBlock">
              <img src="../assets/img/uil_temperature.png" alt="Temperature" />
              <div className="name">Temperature</div>
            </div>
            <div id="temperature" className="parameter">{successRespons ? weatherResponse.current.temperature : ''}</div>
          </div>
          <div className="infoBlock">
            <div className="iconNameBlock">
              <img src="../assets/img/bi_droplet-half.png" alt="Humidity" />
              <div className="name">Humidity</div>
            </div>
            <div id="humidity" className="parameter">{successRespons ? weatherResponse.current.humidity : ''}</div>
          </div>
          <div className="infoBlock">
            <div className="iconNameBlock">
              <img src="../assets/img/bi_arrows-angle-contract.png" alt="Pressure" />
              <div className="name">Pressure</div>
            </div>
            <div id="pressure" className="parameter">{successRespons ? weatherResponse.current.pressure : ''}</div>
          </div>
        </div>
        <div className="verticalInfoBlock">
          <div className="infoBlock">
            <div className="iconNameBlock">
              <img src="../assets/img/uil_clouds.png" alt="Cloud cover" />
              <div className="name">Cloud cover</div>
            </div>
            <div id="cloudCover" className="parameter">{successRespons ? weatherResponse.current.cloudcover : ''}</div>
          </div>
          <div className="infoBlock">
            <div className="iconNameBlock">
              <img src="../assets/img/clarity_sun-line.png" alt="UV Index" />
              <div className="name">UV Index</div>
            </div>
            <div className="unitHorizontal">
              <div id="uvIndex" className="parameter">
                {successRespons ? weatherResponse.current.uv_index : ''}
                {' '}
              </div>
              <div className="name"> of </div>
              <div className="parameter"> 10</div>
            </div>
          </div>
          <div className="infoBlock">
            <div className="iconNameBlock">
              <img src="../assets/img/ei_eye.png" alt="Visibility" />
              <div className="name">Visibility</div>
            </div>
            <div className="unitHorizontal">
              <div id="visibility" className="parameter">
                {successRespons ? weatherResponse.current.visibility : ''}
                {' '}
              </div>
              <div className="name"> km</div>
            </div>
          </div>
        </div>
        <div className="verticalInfoBlock">
          <div className="infoBlock">
            <div className="iconNameBlock">
              <img src="../assets/img/carbon_windy-strong.png" alt="Wind speed" />
              <div className="name">Wind speed</div>
            </div>
            <div className="unitHorizontal">
              <div id="windSpeed" className="parameter">
                {successRespons ? weatherResponse.current.wind_speed : ''}
                {' '}
              </div>
              <div className="name">km/h</div>
            </div>
          </div>
          <div className="infoBlock">
            <div className="iconNameBlock">
              <img src="../assets/img/icomoon-free_compass.png" alt="Wind direction" />
              <div className="name">Wind direction</div>
            </div>
            <div id="windDirection" className="name">{successRespons ? weatherResponse.current.wind_dir : ''}</div>
          </div>
          <div className="infoBlock">
            <div className="iconNameBlock">
              <img src="../assets/img/la_compass.png" alt="Wind degree" />
              <div className="name">Wind degree</div>
            </div>
            <div id="windDegree" className="parameter">{successRespons ? weatherResponse.current.wind_degree : ''}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Weather };
