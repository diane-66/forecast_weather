import './App.css'

import useDailyWeatherData from './hooks/useDaliyWeatherData'
import ErrorDisplay from './components/ErrorDisplay/ErrorDisplay.js'
import Loading from './components/Loading/Loading.js'
import DaysForecastWeather from './components/DaysForecastWeather'

const city = 'Perpignan'
const lat = 42.69
const lon = 2.89
const  part = ['minutely','hourly','alerts']

export default function App() {
  const { data, loading, error } = useDailyWeatherData(lat,lon,part)

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>
          Weather forecast in {city}
        </h1>
      </header>
      {loading && <Loading />}
      {error && <ErrorDisplay error={error} />}
      {data && !error && <DaysForecastWeather 
        data={data}
      />}
    </div>
  )
}