import React from 'react';

//props will be passed from a parent component that uses the Search component.
// onChange event handler is set to setCity(e.target.value), which means that when the user types in the input field, the setCity function will be called with the new value, updating the city state in the parent component.
const Search = ({  city, setCity, getWeather }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Search</button>
    </div>
  );
};

export default Search;