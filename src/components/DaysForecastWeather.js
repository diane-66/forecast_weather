import React from 'react'

import DailyForecastWeather from './DailyWeather/DailyForecastWeather'


export default function DaysForecastWeather({ data }) {
  return (
    <div className='verticallyCentered'>
      {data.map((dataDay, idx) => {
        return (
          <DailyForecastWeather
            key={idx}
            today={idx === 0}
            dailyWeather={dataDay} />
        )
      })}
    </div>
  )
}





