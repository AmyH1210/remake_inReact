import { useState } from 'react'      

import Search from './components/Search';
import Weather_info from './components/Weather_info';

import './App.css'

function App() {
  
  const [city, setCity] = useState('');                    //'setCity' is function. the state is being used to store the city name entered by the user.
  const [temperature, setTemperature] = useState('18°C');      //Stores the temperature data (initialized with a default value of '18°C')
  const [cityName, setCityName] = useState('London');        //  Stores the name of the city (initialized with 'London').
  const [weatherIcon, setWeatherIcon] = useState('../public/assets/clear.png'); //  Stores the path to the weather icon image
  const [error, setError] = useState('');                   //Stores any error message that might occur during the data fetching process


   //getWeather Function
  const getWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=376c0a52672f9c958597bcb9515282ff&&units=metric`;

    try {
       
      const response = await fetch(url);   // await fetching data
      const data = await response.json();  // await for response data


      if (response.status === 404) {           //if a city not found
        setError('Invalid city name');
      } else {                                 //If the response is successful and other errors are
        setError('');
        setTemperature(Math.round(data.main.temp) + '°C');    
        setCityName(data.name);                               

        let iconSrc = '';
        if (data.weather[0].main === 'Clouds') {
          iconSrc = '../public/assets/cloud.png';
        } else if (data.weather[0].main === 'Clear') {
          iconSrc = '../public/assets/clear.png';
        } else if (data.weather[0].main === 'Rain') {
          iconSrc = '../public/assets/rain.png';
        } else if (data.weather[0].main === 'Drizzle') {
          iconSrc = '../public/assets/drizzle.png';
        } else if (data.weather[0].main === 'Mist') {
          iconSrc = '../public/assets/mist.png';
        }
        setWeatherIcon(iconSrc);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('An error occurred while fetching weather data');
    }
  };

  //will be rendered on the page
  // The city, setCity, and getWeather props are passed to the Search component
  // The error, weatherIcon, temperature, cityName props are passed to the Weather_info component
  return (
    <div className="container">
          
          
          <Search  city={city} setCity={setCity} getWeather={getWeather}/>   
          {error && <div className="displayError">{error}</div>}
         
          <Weather_info
              error={error}
              weatherIcon={weatherIcon}
              temperature={temperature}
              cityName={cityName}  />
                                     
    </div>
  );
}

export default App
