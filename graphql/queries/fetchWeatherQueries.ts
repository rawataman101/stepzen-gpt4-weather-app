import { gql, useQuery } from "@apollo/client";

const fetchWeatherQuery = gql`
  query MyQuery(
    $current_weather: String
    $daily: String = "temperature_2m_max,temperature_2m_min"
    $hourly: String = "dewpoint_2m,temperature_2m,precipitation_probability,relativehumidity_2m"
    $latitude: String!
    $longitude: String!
    $timezone: String!
  ) {
    myQuery(
      current_weather: $current_weather
      daily: $daily
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
      timezone: $timezone
    ) {
      current_weather {
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      daily {
        temperature_2m_max
        temperature_2m_min
        time
      }
      daily_units {
        temperature_2m_max
        temperature_2m_min
        time
      }
      generationtime_ms
      elevation
      hourly {
        apparent_temperature
        dewpoint_2m
        precipitation_probability
        relativehumidity_2m
        temperature_2m
        time
      }
      hourly_units {
        apparent_temperature
        dewpoint_2m
        precipitation_probability
        temperature_2m
        relativehumidity_2m
        time
      }
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
    }
  }
`;
export default fetchWeatherQuery;
