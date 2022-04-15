import React from 'react'

import TemperatureOfTheDay from './TemperatureOfTheDay/TemperatureOfTheDay'
import ImageWeather from './ImageWeather'

export default function DailyForecastWeather({ dailyWeather, today }) {
  return (
    <div className={`greyBorder ${today ? 'greyBackground' : ''}`}>
      <div className='day lightGrey'>{dailyWeather.weekDay}</div>
      <ImageWeather 
        id={dailyWeather.sky} />
      <TemperatureOfTheDay 
        dailyWeather={dailyWeather}/>
    </div>
  )
}