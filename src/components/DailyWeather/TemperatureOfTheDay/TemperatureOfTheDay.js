export default function TemperatureOfTheDay({ dailyWeather }) {
  const min = (dailyWeather.min-273.15).toFixed()
  const max = (dailyWeather.max-273.15).toFixed()
  return (
    <div>
      <div className='floatLeft'>{min}&deg;</div>
      <div className='floatLeft lightGrey'>{max}&deg;</div>
    </div>
  )
}


