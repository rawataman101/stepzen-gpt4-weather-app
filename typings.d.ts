interface CurrentWeather {
    is_day: number
    temperature: number
    time: string
    weathercode: number
    winddirection: number
    windspeed: number
}
interface Daily {
    temperature_2m_max: [number]
    temperature_2m_min: [number]
    time: [string]
}

interface DailyUnits {
    temperature_2m_max: string
    temperature_2m_min: string
    time: string
}

interface Hourly {
  apparent_temperature: [number]
  dewpoint_2m: [number]
  precipitation_probability: [number]
  relativehumidity_2m: [number]
  temperature_2m: [number]
  time: [number]
}

interface HourlyUnits {
  apparent_temperature: string
  dewpoint_2m: string
  precipitation_probability: string
  relativehumidity_2m: string
  temperature_2m: string
  time: string
}

interface Root {
    current_weather: CurrentWeather
    daily: Daily
    daily_units: DailyUnits
    elevation: number
    generationtime_ms: number
    hourly: Hourly
    hourly_units: HourlyUnits
    latitude: number
    longitude: number
    timezone: string
    timezone_abbreviation: string
    utc_offset_seconds: number
  }

  export default Root;