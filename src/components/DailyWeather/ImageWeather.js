export default function ImageWeather({ id }) {
    return (
      <img src={`http://openweathermap.org/img/wn/${id}@2x.png`}></img>
    )
  }