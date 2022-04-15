import { useState, useEffect } from 'react'
import axios from "axios"

import { API_KEY } from '../constants.js'

const createApiUrl = (lat, lon, part) => {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${API_KEY}`
};
/**
 *The data collected is from the openweathermap API
 *
 * @export
 * @param {number} lat
 * @param {number} lon
 * @param {Array} part
 * @return {Object} the return object has the following properties:
 * @property {string|null} error - A string with an error message if the
 *                                 request failed. Else null.
 * @property {boolean} loading - true if the request to the API has resolved
 *                               (successfully or failed). Else false.
 * @property {Object[]} data - an array of objects, each object represents a
 *                             day of weather data, and contains the following
 *                             properties:
 *                                 - weekDay: the short weekday name for the day
 *                                         that is being represented.
 *                                 - sky: a string representing the icon to
 *                                         display.
 *                                 - min: the min temperature for that day.
 *                                 - max: the max temperature for that day.
 */
export default function useDailyWeatherData(lat, lon, part) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState([])

  const apiUrl = createApiUrl(lat, lon, part)

  useEffect(() => {
    const getDailyWeatherData = async () => {
      try {
        const response = await axios.get(apiUrl)
        if (!response) {
          throw new Error(`The status of the response is: ${response.status}`);
        }
        const dataArray = await response.data.daily.map(item => {
          const weekDay = new Date(item.dt * 1000).toLocaleDateString('en-US', {
            weekday: 'short',
          })
          const sky = item.weather[0].icon
          const min = item.temp.min
          const max = item.temp.max
          return { weekDay, sky, min, max }
        })
        setData(dataArray)
        setIsLoading(false)
      } catch (err) {
        setError(err.message);
        setIsLoading(false)
      }
    }
    getDailyWeatherData()
  }, [])

  return {
    loading: isLoading,
    error,
    data
  }
}
