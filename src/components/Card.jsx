import React from 'react'
import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

const Card = ({data}) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    if (data && data.timezone) {
      const interval = setInterval(() => {
        const offset = (data.timezone - 23400) * 1000; // Adjusted timezone offset (subtracting 7 hours)
        const localTime = new Date(new Date().getTime() + offset); // Adjust local time based on offset
        setCurrentTime(localTime);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [data]);

    if(JSON.stringify(data) !== '{}'){
        console.log(data);

        return (
            <div className='d-flex flex-column align-items-center gap-2 mt-3'>
                <p><Clock value={currentTime} className="my-2"/></p>
                <h2>{data.name},{data.sys.country}</h2>
                <h1><img src={`http://openweathermap.org//img/w/${data.weather[0].icon}.png`} /> {data.main.temp}°C  </h1>
                <p>Local Time: {currentTime.toLocaleTimeString()}</p>
                <p>Latitude: {data.coord.lat}</p>
                <p>Longitude: {data.coord.lon}</p>
                <p>Min_Temp: {data.main.temp_min}, Max_Temp: {data.main.temp_max}</p>
                <p>Description: {data.weather[0].description}</p>
                <p>Humidity: {data.main.humidity}%</p>
                <p>Visibility: {data.visibility/1000}km</p>
            </div>
          )
    }
    else{
        return (<h1 className='text-center'>Loading...</h1>)
    }
}
export default Card